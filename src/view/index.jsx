import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router'
import { AppProvider } from '../state/AppContext'

export const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}
