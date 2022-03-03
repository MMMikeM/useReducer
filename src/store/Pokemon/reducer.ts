import { LoadingState } from "../../interfaces/pokemon"
import { IState } from "./types"

export default function reducer(
  state: IState,
  action: { type: string; data?: any }
) {
  switch (action.type) {
    case "setPokeMan":
      return {
        ...state,
        pokeMan: action.data,
        status: LoadingState.SUCCESS,
      }
    case "setStatus":
      return {
        ...state,
        status: action.data,
      }
    case "setIsHover":
      return {
        ...state,
        isHover: action.data,
      }
    case "setVisible":
      return {
        ...state,
        isVisible: action.data,
      }
    case "setVisible":
      return {
        ...state,
        isVisible: action.data,
      }
    case "setInputValue":
      return {
        ...state,
        inputValue: action.data,
      }
    case "setCheckBoxValue":
      return {
        ...state,
        checkBoxValue: action.data,
      }
    default:
      return state
  }
}
