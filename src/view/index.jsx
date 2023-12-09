import { RouterProvider } from 'react-router-dom'
import { AppProvider } from '../state/AppContext'
import { router } from './routers/router'

export const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}
