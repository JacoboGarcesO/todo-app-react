import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from '../../hooks/state'

export const AuthProtectedRouter = ({ children }) => {
  const navigate = useNavigate()
  const { state } = useState()

  useEffect(() => {
    if (state.currentUser) return navigate(-1)
  }, [])

  return children
}
