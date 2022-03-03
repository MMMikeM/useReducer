import React, { useEffect, useReducer } from "react"
import { IPokemon, LoadingState } from "../interfaces/pokemon"
// import { initialState, reducer } from "../store/pokemon"

interface IState {
  pokeMan: null | IPokemon
  status: LoadingState
  isHover: boolean
  visible: boolean
  inputValue: string
  checkBoxValue: boolean
}

const initialState = {
  pokeMan: null,
  status: LoadingState.PENDING,
  isHover: false,
  visible: false,
  inputValue: "",
  checkBoxValue: true,
}

const reducer = (state: IState, action: any) => {
  switch (action.type) {
    case "setPokeMan":
      return {
        ...state,
        pokeMan: action.payload,
        status: LoadingState.SUCCESS,
      }
    case "setStatus":
      return {
        ...state,
        status: action.payload,
      }
    case "setIsHover":
      return {
        ...state,
        isHover: action.payload,
      }
    case "setVisible":
      return {
        ...state,
        visible: action.payload,
      }
    case "setInputValue":
      return {
        ...state,
        inputValue: action.payload,
      }
    case "setCheckBoxValue":
      return {
        ...state,
        checkBoxValue: action.payload,
      }
    default:
      return state
  }
}

function Pokemon({ name }: { name: string }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchPoke = async () => {
      return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: "setPokeMan", payload: res })
          dispatch({ type: "setStatus", payload: LoadingState.SUCCESS })
        })
        .catch((err) => {
          console.error(err)
          dispatch({ type: "setStatus", payload: LoadingState.ERROR })
        })
    }
    fetchPoke()
  }, [name])

  useEffect(() => {
    setTimeout(
      () => dispatch({ type: "setVisible", payload: state.isHover }),
      500
    )
  }, [state.isHover])

  const pending = state.status === LoadingState.PENDING
  const success = state.status === LoadingState.SUCCESS
  const fail = state.status === LoadingState.ERROR

  const handleCopy = () => {
    console.log("copy")
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
      dispatch({ type: "setInputValue", payload: "+2783" })
    } else {
      dispatch({ type: "setInputValue", payload: e.target.value })
    }
  }

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    console.log(e.target.checked)
    if (state.inputValue === "password") {
      dispatch({ type: "setCheckBoxValue", payload: e.target.checked })
    } else dispatch({ type: "setCheckBoxValue", payload: false })
  }

  const handleSubmit = () => {
    // e.preventDefault()
  }

  return (
    <>
      {pending && <h2>The page is loading, please wait</h2>}
      {success && (
        <div className="flex gap-12 justify-around w-full items-center">
          <div className="relative">
            <img
              onMouseEnter={() => {
                dispatch({ type: "setIsHover", payload: true })
              }}
              onMouseLeave={() => {
                dispatch({ type: "setIsHover", payload: false })
              }}
              src={state.pokeMan?.sprites.front_default}
              width="240px"
              height="240px"
            />
            {state.visible && (
              <button
                onMouseEnter={() => {
                  dispatch({ type: "setIsHover", payload: true })
                }}
                onMouseLeave={() => {
                  dispatch({ type: "setIsHover", payload: false })
                }}
                onClick={() => {
                  dispatch({ type: "setIsHover", payload: false })
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
