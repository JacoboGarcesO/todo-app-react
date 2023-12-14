import { todoActions } from './actions'

export const todoInitialState = {
  todos: [
    {
      _id: 'jajajasssss',
      name: 'Review content',
      description: 'Review content in Q10 to improve',
      finishDate: '2002-01-29',
      isCompleted: true
    },
    {
      _id: 'dffddfdf',
      name: 'Review content GIT',
      description: 'Review content in Q10 to improve GIT',
      finishDate: '2002-01-29',
      isCompleted: false
    }
  ]
}

export const todoCases = {
  [todoActions.LOAD_TODOS_SUCCESS]: (state, payload) => ({ ...state, todos: payload })
}
