const INITIAL_STATE = {
  todos: [
    { id: "0", task: "Learn how to redux", status: "incomplete" },
    { id: "1", task: "Learn how to love redux", status: "incomplete" },
  ],
}

function todoReducer(
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: state.todos.concat({
          id: String(state.todos.length),
          task: action.payload,
          status: "incomplete",
        }),
      }
    case "SET_STATUS":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, status: action.payload.status }
            : todo
        ),
      }
    default:
      return state
  }
}

export default todoReducer
