export const todoActions = {
  TOGGLE_FORM: 'TOGGLE_FORM',
  UPDATE_TODO_SUCCESS: 'UPDATE_TODO_SUCCESS',
  CREATE_TODO_SUCCESS: 'CREATE_TODO_SUCCESS',
  DELETE_TODO_SUCCESS: 'DELETE_TODO_SUCCESS',
  GET_TODOS_SUCCESS: 'GET_TODOS_SUCCESS',
  SET_TODO_TO_UPDATE: 'SET_TODO_TO_UPDATE'
}

export const toggleForm = () => {
  return {
    type: todoActions.TOGGLE_FORM
  }
}

export const setTodoToUpdate = ({ todo }) => {
  return {
    type: todoActions.SET_TODO_TO_UPDATE,
    payload: todo
  }
}

export const createSuccess = ({ todo }) => {
  return {
    type: todoActions.CREATE_TODO_SUCCESS,
    payload: todo
  }
}

export const updateSuccess = ({ todo }) => {
  return {
    type: todoActions.UPDATE_TODO_SUCCESS,
    payload: todo
  }
}

export const _deleteSuccess = ({ todoId }) => {
  return {
    type: todoActions.DELETE_TODO_SUCCESS,
    payload: todoId
  }
}

export const getSuccess = ({ todos }) => {
  return {
    type: todoActions.GET_TODOS_SUCCESS,
    payload: todos
  }
}
