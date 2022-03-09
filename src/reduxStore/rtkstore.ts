import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todoslice"

export const rtkstore = configureStore({
  reducer: {
    todos: todoReducer,
  },
})

export type AppDispatch = typeof rtkstore.dispatch
export type RootState = ReturnType<typeof rtkstore.getState>
