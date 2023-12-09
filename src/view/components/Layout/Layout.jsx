import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import './Layout.css'

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
