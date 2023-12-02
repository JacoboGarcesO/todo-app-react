import { createHashRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { Authentication } from '../pages/Authentication'
import { Dashboard } from '../pages/Dashboard'
import { Home } from '../pages/Home'
import { AuthProtectedRouter } from './AuthProtectedRouter'
import { PrivateProtectedRouter } from './PrivateProtectedRouter'

export const router = createHashRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        Component: Home
      }
    ]
  },
  {
    path: '/auth',
    element: (
      <AuthProtectedRouter>
        <Authentication />
      </AuthProtectedRouter>
    )
  },
  {
    path: '/dashboard',
    element: (
      <PrivateProtectedRouter>
        <Layout />
      </PrivateProtectedRouter>
    ),
    children: [
      {
        path: '',
        Component: Dashboard
      }
    ]
  }
])
