import { todoActions } from './actions'

export const todoInitialState = {
  todos: []
}

export const todoCases = {
  [todoActions.LOAD_TODOS_SUCCESS]: (state, payload) => ({ ...state, todos: payload })
}
