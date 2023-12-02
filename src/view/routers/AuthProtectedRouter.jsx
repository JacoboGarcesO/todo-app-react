import { useNavigate } from 'react-router-dom'
import { useState } from '../../hooks/state'
import { useEffect } from 'react'

export const AuthProtectedRouter = ({ children }) => {
  const navigate = useNavigate()
  const { state } = useState()

  useEffect(() => {
    if (state.currentUser) return navigate(-1)
  }, [])

  return children
}
