import React from "react";
import { expect, test } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import HomePage from "../pages/index";
import { renderWithProviders } from "@web/utils/test";
import {
  RoomsDocument,
  SessionUserDocument,
} from "@web/generated/graphql-operations";

const mocks = [
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
      query: SessionUserDocument,
    },
    result: {
      data: {
        sessionUser: {
          id: "clnz0bwlk0000sxovhc3qzqgy",
          name: "Test user",
        },
      },
    },
  },
];
test("Index page test", async () => {
  renderWithProviders(<HomePage />, { props: { mocks } });
  await waitFor(() => {
    expect(screen.getByText(/Rooms/i)).toBeDefined();
  });
  //[TODO] debug why mocked values are passed as empty object to node
  // await waitFor(() => {
  //   expect(screen.getByText(/Default Chat Room/i)).toBeDefined();
  // });
});
