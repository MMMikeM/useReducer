import { combineReducers } from "redux"

import todoReducer from "./todoReducer"

const rootReducer = combineReducers({
  todoState: todoReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
