export const clientConfig = {
  apiUrl: `${
    process.env.NEXT_PUBLIC_GQL_URL || "http://localhost:3000/graphql"
  }`,
  subscriptionUrl: `${
    process.env.NEXT_PUBLIC_GQL_SUBSCRIPTION_URL ||
    "ws://localhost:3000/graphql"
  }`,
};
