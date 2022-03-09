export enum TodoState {
  INCOMPLETE = "incomplete",
  COMPLETE = "complete",
  DELETED = "deleted",
}

export type Todo = {
  id: string
  task: string
  status: TodoState
}

export enum TodoAction {
  ADD_TODO = "ADD_TODO",
  SET_STATUS = "SET_STATUS",
}

export type ActionTypes =
  | { type: typeof TodoAction.ADD_TODO; payload: string }
  | {
      type: typeof TodoAction.SET_STATUS
      payload: { status: TodoState; id: string }
    }
