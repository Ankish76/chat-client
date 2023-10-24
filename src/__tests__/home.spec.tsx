import React from "react";
import { expect, test } from "vitest";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import HomePage from "../pages/index";
import { renderWithProviders } from "@web/utils/test";
import { mocks } from "./mocks";

test("Index page test", async () => {
  renderWithProviders(<HomePage />, {
    props: {
      mocks,
      defaultOptions: {
        watchQuery: { fetchPolicy: "no-cache" },
        query: { fetchPolicy: "no-cache" },
      },
    },
  });
  await waitFor(() => {
    expect(screen.getByText(/Rooms/i)).toBeDefined();
  });
  await waitFor(() => {
    expect(screen.getByText(/Default Chat Room/i)).toBeDefined();
  });
  await waitFor(() => {
    const joinButon = screen.getByText("Join");
    fireEvent.click(joinButon);
  });
  await waitFor(() => {
    expect(screen.getByText(/Enter Name to Join Chat Room/i)).toBeDefined();
  });

  const input = screen.getByPlaceholderText("Enter Full Name");
  fireEvent.change(input, { target: { value: "Test User" } });
  const button = screen.getByTestId("submitButton");
  fireEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText(/You have joined/i)).toBeDefined();
  });

  const inputMsg = screen.getByPlaceholderText("Type a message");
  fireEvent.change(inputMsg, { target: { value: "Test Message 1" } });
  const buttonSend = screen.getByTestId("send-button");
  fireEvent.click(buttonSend);
  await waitFor(async () => {
    expect((await screen.findAllByText(/You have joined/i)).length).toBe(2); // Due to mock new message is returning You have joined for new messages
  });
  const inputMsg2 = screen.getByPlaceholderText("Type a message");
  fireEvent.change(inputMsg2, { target: { value: "Test Message 2" } });
  const buttonSend2 = screen.getByTestId("send-button");
  fireEvent.click(buttonSend2);
  await waitFor(async () => {
    expect((await screen.findAllByText(/You have joined/i)).length).toBe(3); // Due to mock new message is returning You have joined for new messages
  });
});
