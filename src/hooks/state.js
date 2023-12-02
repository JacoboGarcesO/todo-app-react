import { useContext } from 'react'
import { AppContext } from '../state/AppContext'

export const useState = () => {
  return useContext(AppContext)
}
