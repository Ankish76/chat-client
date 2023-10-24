import { InMemoryCache } from "@apollo/client";
// import memoize from "lodash/memoize";

// import introspectionQueryResultData from "@web/generated/graphql.schema.json";

import typePolicies from "./typePolicies";

// uncomment all possible types code when there is interface or union in schema
// const possibleTypes: Record<string, any> = {};

// const processFragmentTypes = memoize(() => {
//   introspectionQueryResultData.__schema.types.forEach((supertype) => {
//     if (supertype.possibleTypes) {
//       possibleTypes[supertype.name] = supertype.possibleTypes.map(
//         (subtype) => subtype.name
//       );
//     }
//   });
// });

const cache: () => InMemoryCache = () => {
  //   processFragmentTypes();
  //   if (!Object.keys(possibleTypes)) {
  //     console.log("WARNING. Possible fragment types is empty");
  //   }
  const theWindow = typeof window !== "undefined" ? (window as any) : undefined;
  if (!theWindow?.__APOLLO_STATE__) {
    return new InMemoryCache({
      //   possibleTypes,
      typePolicies,
    });
  }
  return new InMemoryCache({
    // possibleTypes,
    typePolicies,
  }).restore(
    theWindow.__APOLLO_STATE__ // eslint-disable-line
  );
};

export default cache;
