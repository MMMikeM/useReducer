import { useDispatch, useSelector } from "react-redux"
import store from "../reduxStore"
import { RootState } from "../reduxStore/reducers"
import { Todo, TodoState } from "../reduxStore/types"
import { useForm } from "@felte/react"
import { addTodo } from "../reduxStore/actions/todoActions"

const TodoItem = ({
  id,
  task,
  status,
}: {
  id: string
  task: string
  status: TodoState
}) => {
  return (
    <div className="flex gap-4 my-8">
      <div>{task}</div>
      <div>{status}</div>
      <div>id: {id}</div>
    </div>
  )
}

export default function Redux3() {
  const dispatch = useDispatch()

  const { form } = useForm({
    onSubmit: (values) => {
      dispatch(addTodo(values.todo))
    },
  })

  // we need to use a redux provider to use the below
  const todos = useSelector((state: RootState) => state.todoState.todos)

  return (
    <div className="">
      <div className="text-xl font-bold">Redux</div>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
      <form ref={form}>
        <label htmlFor="todo">Todo</label>
        <input
          id="todo"
          name="todo"
          placeholder="What you wanna do?"
          type="todo"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
