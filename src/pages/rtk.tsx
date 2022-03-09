import { useForm } from "@felte/react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../reduxStore/rtkstore"
import { addTodo, setStatus } from "../reduxStore/todoslice"
import { TodoState } from "../reduxStore/types"

export default function Rtk() {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()

  const { form } = useForm({
    onSubmit: (values) => {
      dispatch(addTodo(values.todo))
    },
  })

  const TodoItem = ({
    id,
    task,
    status,
  }: {
    id: string
    task: string
    status: TodoState
  }) => {
    console.log("task:", task)
    return (
      <div className="flex gap-4 my-8">
        <div
          className={
            status === TodoState.DELETED ? "line-through text-red-600" : ""
          }
        >
          {task}
        </div>
        <div>id: {id}</div>
        <div className="">
          <label htmlFor="completed">completed</label>
          <input
            name="completed"
            type={`checkbox`}
            checked={status === TodoState.COMPLETE}
            onChange={() =>
              dispatch(setStatus({ id, status: TodoState.COMPLETE }))
            }
          />
        </div>
        <div className="">
          <label htmlFor="deleted">deleted</label>
          <input
            name="deleted"
            type={`checkbox`}
            checked={status === TodoState.DELETED}
            onChange={() =>
              dispatch(setStatus({ id, status: TodoState.DELETED }))
            }
          />
        </div>
      </div>
    )
  }

  return (
    <div className="">
      <div className="text-xl font-bold">Rtk</div>
      {todos.map(
        (
          todo: JSX.IntrinsicAttributes & {
            id: string
            task: string
            status: TodoState
          }
        ) => (
          <TodoItem {...todo} key={todo.id} />
        )
      )}
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
