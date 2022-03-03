import React, { useEffect, useReducer } from "react"
import reducer from "../store/Pokemon/reducer"
import initialState from "../store/Pokemon/state"
import { LoadingState } from "../interfaces/pokemon"

function Pokemon({ name }: { name: string }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: "setStatus", data: LoadingState.PENDING })
    const fetchPoke = async () => {
      return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((res) => dispatch({ type: "setPokeMan", data: res }))
        .catch((err) =>
          dispatch({ type: "setStatus", data: LoadingState.ERROR })
        )
    }
    fetchPoke()
  }, [name])

  useEffect(() => {
    setTimeout(() => dispatch({ type: "setVisible", data: state.isHover }), 500)
  }, [state.isHover])

  const handleCopy = () => {
    dispatch({ type: "setInputValue", data: "butts" })
    navigator.clipboard.writeText("Get rekt")
  }

  const handleClickCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("e.detail:", e.detail)
    switch (e.detail) {
      case 1:
        console.log("click")
        break
      case 2:
        console.log("double click")
        break
      case 3:
        console.log("triple click")
        break
      case 5:
        console.log("PENTA click")
        break
      case 10:
        console.log("DEEECCCCAAAAA-CLIICCCCCKKKK")
        break
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "083") {
      dispatch({ type: "setInputValue", data: "+2783" })
    } else {
      dispatch({ type: "setInputValue", data: e.target.value })
    }
  }

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    console.log(e.target.checked)
    if (state.inputValue === "password") {
      dispatch({ type: "setCheckBoxValue", data: e.target.checked })
    } else dispatch({ type: "setCheckBoxValue", data: false })
  }

  const handleSubmit = () => {
    // e.preventDefault()
  }

  const pending = state.status === LoadingState.PENDING
  const success = state.status === LoadingState.SUCCESS
  const fail = state.status === LoadingState.ERROR

  return (
    <>
      {pending && <h2>The page is loading, please wait</h2>}
      {success && (
        <div className="flex gap-12 justify-around w-full items-center">
          <div className="relative">
            <img
              onMouseEnter={() => dispatch({ type: "setIsHover", data: true })}
              onMouseLeave={() => dispatch({ type: "setIsHover", data: false })}
              src={state.pokeMan?.sprites.front_default}
              width="240px"
              height="240px"
            />
            {state.visible && (
              <button
                onMouseEnter={() => {
                  dispatch({ type: "setIsHover", data: true })
                }}
                onMouseLeave={() => {
                  dispatch({ type: "setIsHover", data: false })
                }}
                onClick={() => {
                  dispatch({ type: "setIsHover", data: false })
                  alert("butts")
                }}
                className={`text-3xl font-bold absolute top-12 bg-indigo-500 
              px-4 py-2 text-white shadow-md rounded-md 
              hover:cursor-pointer transition-opacity duration-300  
              ${state.visible ? "opacity-100" : "opacity-0"}`}
              >
                Wow, is this a popup menu
              </button>
            )}
          </div>
          <h2
            onCopy={handleCopy}
            onCut={handleCopy}
            onDoubleClick={() => alert("You double clicked")}
            className="text-3xl font-bold"
          >
            Copy me?
          </h2>
          <button
            onClick={(e) => handleClickCount(e)}
            className="text-3xl font-bold bg-indigo-500 text-white rounded-md shadow-md py-2 px-4 w-64 flex flex-col"
          >
            Click me lots{" "}
            <span className="text-sm font-light text-indigo-400 -mt-1">
              please daddy
            </span>
          </button>
          <div className="flex flex-col">
            <form onSubmit={(e) => handleSubmit()}>
              <label>
                <span className="text-lg text-gray-600 font-medium">Stuff</span>
                <input
                  value={state.inputValue}
                  onChange={(e) => handleInputChange(e)}
                  type="text"
                  className="rounded border-transparent shadow w-64 block"
                />
                <div className="h-12">{state.inputValue}</div>
              </label>
            </form>

            <label className="flex items-center mb-6">
              <span className="text-xl text-gray-600 font-medium mr-4">
                Checkbox
              </span>
              <input
                checked={state.checkBoxValue}
                onChange={(e) => handleCheckChange(e)}
                type="checkbox"
                className="h-6 w-6 rounded border-gray-300 text-indigo-600 shadow-sm 
              focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </div>
      )}
      {fail && <h2>Your request failed</h2>}
    </>
  )
}

export default Pokemon
