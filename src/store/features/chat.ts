// src/features/chatSlice.ts

import { Chat } from "@/generated/graphql-operations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  input: string;
  messages: Chat[];
}

const initialState: ChatState = {
  messages: [],
  input: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    resetChats: (state, action: PayloadAction<Chat[]>) => {
      state.messages = action.payload;
    },
    inputChange: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    addMessage: (state, action: PayloadAction<Chat>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { resetChats, inputChange, addMessage } = chatSlice.actions;

export const selectMessages = (state: { chat: ChatState }) =>
  state.chat.messages;
export const selectInput = (state: { chat: ChatState }) => state.chat.input;

export default chatSlice.reducer;
