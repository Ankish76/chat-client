import type { CodegenConfig } from "@graphql-codegen/cli";

require("dotenv").config();
const config: CodegenConfig = {
  config: {
    scalars: {
      //   UUID: "string",
      Date: "Date",
      DateTime: "Date",
    },
  },
  schema: [process.env.NEXT_PUBLIC_API_URL || ""],
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/": {
      preset: "client",
    },
    "src/generated/graphql-operations.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
    "src/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "src/generated/apollo-helpers.ts": {
      plugins: ["typescript-apollo-client-helpers"],
    },
  },
};

export default config;
