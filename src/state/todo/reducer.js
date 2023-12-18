import { todoActions } from './actions'

export const todoInitialState = {
  todos: [],
  todoToUpdate: null,
  isVisibleForm: false,
  showDialog: false,
  todoToDelete: null
}

export const todoCases = {
  [todoActions.TOGGLE_FORM]: (state) => ({ ...state, isVisibleForm: !state.isVisibleForm }),
  [todoActions.TOGGLE_DIALOG]: (state) => ({ ...state, showDialog: !state.showDialog }),
  [todoActions.GET_TODOS_SUCCESS]: (state, payload) => ({ ...state, todos: payload }),
  [todoActions.SET_TODO_TO_UPDATE]: (state, payload) => ({ ...state, todoToUpdate: payload }),
  [todoActions.SET_TODO_TO_DELETE]: (state, payload) => ({ ...state, todoToDelete: payload }),
  [todoActions.CREATE_TODO_SUCCESS]: (state, payload) => ({ ...state, todos: [...state.todos, payload] }),
  [todoActions.UPDATE_TODO_SUCCESS]: (state, payload) => {
    const index = state.todos.findIndex((todo) => todo._id === payload._id)
    state.todos[index] = payload
    return { ...state, todoToUpdate: null }
  },
  [todoActions.DELETE_TODO_SUCCESS]: (state, payload) => {
    const todos = state.todos.filter((todo) => todo._id !== payload)
    return { ...state, todos, showDialog: false }
  }
}
