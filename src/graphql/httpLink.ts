import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { createHttpLink, from, split } from "@apollo/client";
import { HttpOptions } from "@apollo/client/link/http/selectHttpOptionsAndBody";
import { setContext } from "@apollo/client/link/context";
import { clientConfig } from "@/config/client";

const illegalHeaders: string[] = ["connection"];
const { apiUrl } = clientConfig;
const stripIllegalHeaders = (
  isServer: boolean,
  headers: { [key: string]: string }
) => {
  if (isServer) {
    const headerCopy = { ...headers };
    headerCopy["x-forwarded-host"] = headerCopy.host;
    for (let x = 0; x < Object.keys(illegalHeaders).length; x++) {
      const hdr = illegalHeaders[x] as keyof typeof headers;
      delete headerCopy[hdr];
    }
    return headerCopy;
  }
  return headers;
};

const stripIllegalHeadersLinkFromContext = (isServer: boolean) =>
  setContext((_request, previousContext) => {
    let incomingHeaders = { ...(previousContext.headers || {}) };
    // Moved from `httpLink` to here
    if (isServer) {
      incomingHeaders = stripIllegalHeaders(isServer, incomingHeaders);
    }
    return {
      ...previousContext,
      headers: incomingHeaders,
    };
  });

const createBatchHttpLink = (() => {
  let _batchHttpLink: BatchHttpLink;
  return (options: BatchHttpLink.Options) => {
    if (!_batchHttpLink) {
      _batchHttpLink = new BatchHttpLink(options);
    }
    return _batchHttpLink;
  };
})();

const httpLink = (isServer: boolean, opts: Record<string, any>) => {
  const options: HttpOptions = {
    fetch: isServer && opts.fetch,
    uri: apiUrl,
    fetchOptions: {
      // permits cross origin from http => https
      // mode: 'no-cors',
      // 'same-origin' for the client can be used if server on a different domain
      credentials: isServer ? "same-origin" : "include",
      timeout: 30000,
    },
    credentials: isServer ? "same-origin" : "include",
  };
  // Workaround in order to pass cookies

  if (isServer) {
    // Workaround in order to pass cookies
    let incomingHeaders = { ...(opts?.req?.headers || {}) };
    // node 18 fetch replacement undici doesn't accept certain headers such as 'connection'
    // https://github.com/nodejs/undici/blob/9e5316c8b04a7b35522d0d5b8de71f67fa2a3c34/lib/fetch/constants.js#L3
    incomingHeaders = stripIllegalHeaders(isServer, incomingHeaders);
    options.headers = incomingHeaders;
  }
  // switch between normal operation and batch operation
  return from([
    stripIllegalHeadersLinkFromContext(isServer),
    split(
      (_operation) => isServer,
      createHttpLink(options),
      createBatchHttpLink(options)
    ),
  ]);
};

export default httpLink;
