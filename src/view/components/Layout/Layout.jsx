import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import './Layout.css'
import { Footer } from '../Footer/Footer'

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='layout__main'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
