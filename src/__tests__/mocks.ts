import {
  AddMessageDocument,
  ChatSubDocument,
  ChatsDocument,
  JoinRoomDocument,
  RoomsDocument,
  SessionUserDocument,
} from "@web/generated/graphql-operations";

export const mocks = [
  {
    request: {
      query: RoomsDocument,
    },
    result: {
      data: {
        rooms: {
          edges: [
            {
              node: {
                id: "clnz0bwlk0000sxovhc3qzqgy",
                name: "Default Chat Room",
                haveJoined: false,
                createdAt: "2023-10-21T22:25:41.051Z",
                updatedAt: "2023-10-21T22:25:41.051Z",
              },
            },
          ],
          pageInfo: {
            endCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
          },
          totalCount: 1,
        },
      },
    },
  },
  {
    request: {
      query: RoomsDocument,
    },
    result: {
      data: {
        rooms: {
          edges: [
            {
              node: {
                id: "clnz0bwlk0000sxovhc3qzqgy",
                name: "Default Chat Room",
                haveJoined: false,
                createdAt: "2023-10-21T22:25:41.051Z",
                updatedAt: "2023-10-21T22:25:41.051Z",
              },
            },
          ],
          pageInfo: {
            endCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
          },
          totalCount: 1,
        },
      },
    },
  },
  {
    request: {
      query: RoomsDocument,
    },
    result: {
      data: {
        rooms: {
          edges: [
            {
              node: {
                id: "clnz0bwlk0000sxovhc3qzqgy",
                name: "Default Chat Room",
                haveJoined: true,
                createdAt: "2023-10-21T22:25:41.051Z",
                updatedAt: "2023-10-21T22:25:41.051Z",
              },
            },
          ],
          pageInfo: {
            endCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
          },
          totalCount: 1,
        },
      },
    },
  },
  {
    request: {
      query: RoomsDocument,
    },
    result: {
      data: {
        rooms: {
          edges: [
            {
              node: {
                id: "clnz0bwlk0000sxovhc3qzqgy",
                name: "Default Chat Room",
                haveJoined: true,
                createdAt: "2023-10-21T22:25:41.051Z",
                updatedAt: "2023-10-21T22:25:41.051Z",
              },
            },
          ],
          pageInfo: {
            endCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
          },
          totalCount: 1,
        },
      },
    },
  },
  {
    request: {
      query: RoomsDocument,
    },
    result: {
      data: {
        rooms: {
          edges: [
            {
              node: {
                id: "clnz0bwlk0000sxovhc3qzqgy",
                name: "Default Chat Room",
                haveJoined: true,
                createdAt: "2023-10-21T22:25:41.051Z",
                updatedAt: "2023-10-21T22:25:41.051Z",
              },
            },
          ],
          pageInfo: {
            endCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
          },
          totalCount: 1,
        },
      },
    },
  },
  {
    request: {
      query: ChatsDocument,
      variables: { roomId: "clnz0bwlk0000sxovhc3qzqgy" },
    },
    result: {
      data: {
        chats: {
          edges: [
            {
              node: {
                id: "clo456n4c0002gopm86f08dcf",
                message: "Test User has joined",
                type: "JOIN",
                createdAt: "2023-10-24T09:46:34.763Z",
                user: {
                  id: "clnz0bwlk0000sxovhc3qzqge",
                  name: "Test user",
                },
              },
            },
          ],
          pageInfo: {
            endCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
          },
          totalCount: 1,
        },
      },
    },
  },
  {
    request: {
      query: ChatsDocument,
      variables: { roomId: "clnz0bwlk0000sxovhc3qzqgy" },
    },
    result: {
      data: {
        chats: {
          edges: [
            {
              node: {
                id: "clo456n4c0002gopm86f08dcf",
                message: "Test Message 1",
                type: "JOIN",
                createdAt: "2023-10-24T09:46:34.763Z",
                user: {
                  id: "clnz0bwlk0000sxovhc3qzqge",
                  name: "Test user",
                },
              },
            },
          ],
          pageInfo: {
            endCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
          },
          totalCount: 1,
        },
      },
    },
  },
  {
    request: {
      query: ChatsDocument,
      variables: { roomId: "clnz0bwlk0000sxovhc3qzqgy" },
    },
    result: {
      data: {
        chats: {
          edges: [
            {
              node: {
                id: "clo456n4c0002gopm86f08dcf",
                message: "Test Message 2",
                type: "JOIN",
                createdAt: "2023-10-24T09:46:34.763Z",
                user: {
                  id: "clnz0bwlk0000sxovhc3qzqge",
                  name: "Test user",
                },
              },
            },
          ],
          pageInfo: {
            endCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: "R1BDOlM6Y2xuejBid2xrMDAwMHN4b3ZoYzNxenFneQ==",
          },
          totalCount: 1,
        },
      },
    },
  },
  {
    request: {
      query: SessionUserDocument,
    },
    result: {
      data: {
        sessionUser: {
          id: "clnz0bwlk0000sxovhc3qzqge",
          name: "Test user",
        },
      },
    },
  },
  {
    request: {
      query: JoinRoomDocument,
      variables: { roomId: "clnz0bwlk0000sxovhc3qzqgy", name: "Test User" },
    },
    result: {
      data: {
        joinRoom: {
          id: "clnz0bwlk0000sxovhc3qzqge",
          name: "Test user",
        },
      },
    },
  },
  {
    request: {
      query: JoinRoomDocument,
      variables: { roomId: "clnz0bwlk0000sxovhc3qzqgy", name: "Test User" },
    },
    result: {
      data: {
        joinRoom: {
          id: "clnz0bwlk0000sxovhc3qzqge",
          name: "Test user",
        },
      },
    },
  },
  {
    request: {
      query: JoinRoomDocument,
      variables: { roomId: "clnz0bwlk0000sxovhc3qzqgy", name: "Test User" },
    },
    result: {
      data: {
        joinRoom: {
          id: "clnz0bwlk0000sxovhc3qzqge",
          name: "Test user",
        },
      },
    },
  },
  {
    request: {
      query: ChatSubDocument,
      variables: { roomId: "clnz0bwlk0000sxovhc3qzqgy" },
    },
    result: {
      data: {
        chatSub: {
          id: "clo456n4c0002gopm86f08dcf",
          message: "Test User has joined",
          type: "JOIN",
          createdAt: "2023-10-24T09:46:34.763Z",
          user: {
            id: "clnz0bwlk0000sxovhc3qzqge",
            name: "Test user",
          },
        },
      },
    },
  },
  {
    request: {
      query: ChatSubDocument,
      variables: { roomId: "clnz0bwlk0000sxovhc3qzqgy" },
    },
    result: {
      data: {
        chatSub: {
          id: "clo456n4c0002gopm86f08dcf",
          message: "Test Message 1",
          type: "JOIN",
          createdAt: "2023-10-24T09:46:34.763Z",
          user: {
            id: "clnz0bwlk0000sxovhc3qzqge",
            name: "Test user",
          },
        },
      },
    },
  },
  {
    request: {
      query: ChatSubDocument,
      variables: { roomId: "clnz0bwlk0000sxovhc3qzqgy" },
    },
    result: {
      data: {
        chatSub: {
          id: "clo456n4c0002gopm86f08dcf",
          message: "Test Message 2",
          type: "JOIN",
          createdAt: "2023-10-24T09:46:34.763Z",
          user: {
            id: "clnz0bwlk0000sxovhc3qzqge",
            name: "Test user",
          },
        },
      },
    },
  },
  {
    request: {
      query: AddMessageDocument,
      variables: {
        roomId: "clnz0bwlk0000sxovhc3qzqgy",
        userId: "clnz0bwlk0000sxovhc3qzqge",
        message: "Test Message 1",
      },
    },
    result: {
      data: {
        addMessage: {
          id: "clo456n4c0002gopm86f08dcf",
          message: "Test Message 1",
          type: "JOIN",
          createdAt: "2023-10-24T09:46:34.763Z",
          user: {
            id: "clnz0bwlk0000sxovhc3qzqge",
            name: "Test user",
          },
        },
      },
    },
  },
  {
    request: {
      query: AddMessageDocument,
      variables: {
        roomId: "clnz0bwlk0000sxovhc3qzqgy",
        userId: "clnz0bwlk0000sxovhc3qzqge",
        message: "Test Message 2",
      },
    },
    result: {
      data: {
        addMessage: {
          id: "clo456n4c0002gopm86f08dcf",
          message: "Test Message 2",
          type: "JOIN",
          createdAt: "2023-10-24T09:46:34.763Z",
          user: {
            id: "clnz0bwlk0000sxovhc3qzqge",
            name: "Test user",
          },
        },
      },
    },
  },
];
