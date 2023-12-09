import { userCases, userInitialState } from './user/reducer'
import { todoCases, todoInitialState } from './todo/reducer'

export const initialState = { ...todoInitialState, ...userInitialState }

export const reducer = (state, action) => {
  const cases = { ...userCases, ...todoCases }
  return cases[action.type](state, action.payload) || state
}
