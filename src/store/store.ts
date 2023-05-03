import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./slices/characterSlice";
import todosReducer from "./slices/todosSlice";

export const store = configureStore({
  reducer: {
    characterInfo: characterReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
