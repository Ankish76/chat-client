/* eslint-disable no-useless-catch */
import { useMemo } from "react";
import {
  ApolloClient,
  ApolloLink,
  NormalizedCacheObject,
  split,
  from,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import { createClient } from "graphql-ws";

import getWs from "./websocket";
import cache from "./cache";
import httpLink from "./httpLink";
import { clientConfig } from "@/config/client";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

const isServer = typeof window === "undefined";
const { subscriptionUrl } = clientConfig;
const nothing = (..._params: any[]): null => null;
const wsClient = (opts: Record<string, any>) => {
  if (isServer) {
    return nothing;
  }
  const ws = getWs(isServer);
  if (!ws) {
    console.log("Missing websocket. Subscriptions disabled");
    return nothing;
  }
  // return nothing;
  try {
    const client = createClient({
      url: subscriptionUrl,
      lazy: true,
      lazyCloseTimeout: 30000,
    });
    return new GraphQLWsLink(client);
  } catch (err) {
    console.log("Subscription error", err);
    return nothing;
    // Do we want to throw here?
  }
};

const link = (opts: Record<string, any> = {}) =>
  split(
    // split based on operation type
    (params) => {
      const { query } = params;
      const { kind, operation } = getMainDefinition(query) as any;
      // TODO should I exclude websockets from server rendering?
      return kind === "OperationDefinition" && operation === "subscription";
    },
    wsClient(opts),
    httpLink(isServer, opts)
  );

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
type ApolloClientFN = (
  e?: NormalizedCacheObject,
  opts?: Record<string, any>
) => ApolloClient<NormalizedCacheObject>;
const createApolloClient = (opts: Record<string, any> = {}) => {
  const links = [link(opts)].reduce((acc, value) => {
    if (typeof value !== "boolean") {
      acc.push(value);
    }
    return acc;
  }, [] as ApolloLink[]);
  const localCache = cache();
  const client = new ApolloClient<NormalizedCacheObject>({
    ssrMode: isServer,
    connectToDevTools: true,
    // assumeImmutableResults: true,
    link: from(links),
    cache: localCache,
    defaultOptions: {
      query: {
        notifyOnNetworkStatusChange: true,
      },
    },
  });
  return client;
};

// this will create new client for each request on ssr but not for client side
export const initializeApollo: ApolloClientFN = (
  initialState,
  options = {}
) => {
  const _apolloClient = apolloClient ?? createApolloClient(options);
  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

type ApolloStateFN = <T = Record<string, any>>(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: { props: T }
) => {
  props: T;
};

export const addApolloState: ApolloStateFN = (client, pageProps) => {
  if (pageProps?.props) {
    (pageProps.props as Record<string, any>)[APOLLO_STATE_PROP_NAME] =
      client.cache.extract();
  } else {
    pageProps.props = {
      [APOLLO_STATE_PROP_NAME]: client.cache.extract(),
    } as any;
  }
  return pageProps;
};

export const useApollo: (e: any) => ApolloClient<NormalizedCacheObject> = (
  pageProps
) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
};
