import { StrictTypedTypePolicies } from "@web/generated/apollo-helpers";

const typePolicies: StrictTypedTypePolicies = {
  // Keys in this object will be validated against the types on your schema
  User: {
    keyFields: ["id"], // Values in this field will be validated against the available fields from the Product type
    fields: {
      rooms: { merge: true },
    },
  },
  ChatRoom: {
    keyFields: ["id"],
    fields: {
      users: {
        merge: true,
      },
      chats: {
        merge: true,
      },
    },
  },
  Query: {
    // This entire definition is typed, based on available types and fields
    fields: {
      users: {
        merge: true,
      },
      chats: {
        merge: true,
      },
      rooms: {
        merge: true,
      },
    },
  },
};

export default typePolicies;
