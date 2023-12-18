import { userActions } from './actions'

export const userInitialState = {
  currentUser: null
}

export const userCases = {
  [userActions.REGISTER_USER_SUCCESS]: (state, payload) => ({ ...state, currentUser: payload }),
  [userActions.AUTHENTICATION_SUCCESS]: (state, payload) => ({ ...state, currentUser: payload }),
  [userActions.LOGOUT]: (state, payload) => ({ ...state, currentUser: null })
}
