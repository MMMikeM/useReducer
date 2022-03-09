import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./rtkstore"
import { Todo, TodoState } from "./types"

const initialState: Todo[] = [
  {
    id: "0",
    task: "Learn how to butt",
    status: TodoState.INCOMPLETE,
  },
  {
    id: "1",
    task: "Learn how to stuff",
    status: TodoState.INCOMPLETE,
  },
  {
    id: "2",
    task: "Learn how to things",
    status: TodoState.INCOMPLETE,
  },
]

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, task) => {
      return [
        ...state,
        {
          id: String(state.length),
          task: task.payload,
          status: TodoState.INCOMPLETE,
        },
      ]
    },
    setStatus: (
      state,
      action: PayloadAction<{ id: string; status: TodoState }>
    ) => {
      const { id, status } = action.payload
      const updateStatus = (status: TodoState, newStatus: TodoState) =>
        status === newStatus ? TodoState.INCOMPLETE : newStatus

      return [
        ...state.map((todo) =>
          todo.id !== id
            ? todo
            : { ...todo, status: updateStatus(todo.status, status) }
        ),
      ]
    },
  },
})

export const { addTodo, setStatus } = todoSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTodos = (state: RootState) => state.todos
export const selectTodoById = (state: RootState, id: string) =>
  state.todos.find((todo: { id: string }) => todo.id === id)

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default todoSlice.reducer
