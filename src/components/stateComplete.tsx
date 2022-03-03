import { useRef, useState } from "react"

const Counter = ({ count, setCount }: any) => {
  console.log("child rendered")
  return (
    <div className="flex flex-col  bg-gray-100 p-8 rounded-md shadow-md">
      <h1 className="text-2xl font-bold">State</h1>
      <button className="btn my-4" onClick={setCount}>
        Increment State
      </button>
      <h2 className="text-xl font-semibold">{count}</h2>
    </div>
  )
}

export default function State() {
  let countSomething = 0
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  console.log("I just rendered")
  console.count("render")

  const handleStateClick = () => {
    setCount(count + 1)
  }
  const handleLetClick = () => {
    countSomething = countSomething + 1
    console.log("countSomething:", countSomething)
  }
  const handleRefClick = () => {
    countRef.current = countRef.current + 1
  }
  const handleAllClick = () => {
    handleLetClick()
    handleStateClick()
    handleRefClick()
  }

  return (
    <div className="flex gap-x-16">
      <div className="flex flex-col  bg-gray-100 p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Let</h1>
        <button className="btn my-4" onClick={handleLetClick}>
          Increment
        </button>
        <h2 className="text-xl font-semibold">{countSomething}</h2>
      </div>
      <div className="flex flex-col  bg-gray-100 p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">State</h1>
        <button className="btn my-4" onClick={handleStateClick}>
          Increment State
        </button>
        {/* <h2 className="text-xl font-semibold">{count}</h2> */}
      </div>
      <div className="flex flex-col  bg-gray-100 p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Ref</h1>
        <button className="btn my-4" onClick={handleRefClick}>
          Increment Ref
        </button>
        <h2 className="text-xl font-semibold">{countRef.current}</h2>
      </div>
      <div className="flex flex-col  bg-gray-100 p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">All</h1>
        <button className="btn my-4" onClick={handleAllClick}>
          Increment All
        </button>
      </div>
      {/* <Counter count={count} setCount={handleStateClick} /> */}
    </div>
  )
}
