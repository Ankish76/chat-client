import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import roomReducer from "./features/room";
import chatReducer from "./features/chat";
import userReducer from "./features/user";

const persistConfig = {
  key: "root",
  storage,
};

const persistedRoomReducer = persistReducer(persistConfig, roomReducer);
const persistedChatReducer = persistReducer(persistConfig, chatReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    room: persistedRoomReducer,
    chat: persistedChatReducer,
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
