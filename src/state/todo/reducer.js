import { todoActions } from './actions'

export const todoInitialState = {
  todos: [
    {
      isCompleted: true
    },
    {
      isCompleted: false
    }
  ]
}

export const todoCases = {
  [todoActions.LOAD_TODOS_SUCCESS]: (state, payload) => ({ ...state, todos: payload })
}
