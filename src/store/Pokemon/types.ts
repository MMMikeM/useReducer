import { LoadingState, IPokemon } from "../../interfaces/pokemon"

export interface IState {
  pokeMan: null | IPokemon
  status: LoadingState
  isHover: boolean
  visible: boolean
  inputValue: string
  checkBoxValue: boolean
}
