import { Navigate } from 'react-router-dom'
import { useState } from '../../hooks/state'

export const PrivateProtectedRouter = ({ children }) => {
  const { state } = useState()

  if (!state.currentUser) {
    return <Navigate to='/auth' replace />
  }

  return children
}
