import { LoadingState } from "../../interfaces/pokemon"

const initialState = {
  pokeMan: null,
  status: LoadingState.PENDING,
  isHover: false,
  visible: false,
  inputValue: "",
  checkBoxValue: true,
}

export default initialState
