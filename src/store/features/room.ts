// src/features/roomSlice.ts

import { ChatRoom } from "@web/generated/graphql-operations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoomState {
  currentRoom: ChatRoom | null;
  rooms: ChatRoom[];
}

const initialState: RoomState = {
  currentRoom: null,
  rooms: [],
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    resetRooms: (state, action: PayloadAction<ChatRoom[]>) => {
      state.rooms = action.payload;
    },
    joinRoom: (state, action: PayloadAction<string>) => {
      const index = state.rooms.findIndex((m) => m.id);
      state.rooms[index] = { ...state.rooms[index], haveJoined: true };
      state.currentRoom = { ...state.rooms[index], haveJoined: true };
    },
    setCurrentRoom: (state, action: PayloadAction<ChatRoom | null>) => {
      state.currentRoom = action.payload;
    },
  },
});

export const { resetRooms, joinRoom, setCurrentRoom } = roomSlice.actions;

export const selectRooms = (state: { room: RoomState }) => state.room.rooms;
export const selectCurrentRoom = (state: { room: RoomState }) =>
  state.room.currentRoom;

export default roomSlice.reducer;
