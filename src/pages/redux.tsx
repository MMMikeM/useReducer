import store from "../reduxStore"
import { Todo } from "../reduxStore/types"

export default function Redux() {
  // const handleAddTodo = (state: any) => {
  //   console.log(state)
  //   const todos = state.todoState
  //   console.log("todos:", todos)
  //   const newTodos: Todo[] = [
  //     ...todos,
  //     { id: "3", task: "Learn how to redux2", status: "incomplete" },
  //   ]
  //   return newTodos
  // }

  const handleClick = () => {
    store.dispatch({
      type: "ADD_TODO",
      payload: "Learn how to redux2",
    })
  }

  console.log(store)
  console.log(store.getState())

  store.subscribe(() => console.log("Store updated!", store.getState()))

  return (
    <div className="">
      <div>Redux</div>
      <button className="btn" onClick={handleClick}>
        Add
      </button>
    </div>
  )
}
