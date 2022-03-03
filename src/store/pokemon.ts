import { LoadingState, IPokemon } from "../interfaces/pokemon"

export const initialState = {
  pokeMan: null,
  status: LoadingState.PENDING,
  isHover: false,
  visible: false,
  inputValue: "",
  checkBoxValue: true,
}

interface IState {
  pokeMan: null | IPokemon
  status: LoadingState
  isHover: boolean
  visible: boolean
  inputValue: string
  checkBoxValue: boolean
}

export const reducer = (
  state: IState,
  action: { type: string; data?: any }
) => {
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
