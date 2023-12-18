export const userActions = {
  REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
  AUTHENTICATION_SUCCESS: 'AUTHENTICATION_SUCCESS',
  LOGOUT: 'LOGOUT'
}

export const registerSuccess = ({ user }) => {
  return {
    type: userActions.REGISTER_USER_SUCCESS,
    payload: user
  }
}

export const logout = () => {
  return {
    type: userActions.LOGOUT
  }
}

export const authSuccess = ({ user }) => {
  return {
    type: userActions.AUTHENTICATION_SUCCESS,
    payload: user
  }
}
