// src/features/chatSlice.ts

import { User } from "@web/generated/graphql-operations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: Omit<User, "rooms"> | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Omit<User, "rooms">>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: { user: UserState }) => state.user.user;

export default userSlice.reducer;
