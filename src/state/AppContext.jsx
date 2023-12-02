import { createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
