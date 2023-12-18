import { Link } from 'react-router-dom'
import { LogoutIcon } from '../Icons/LogoutIcon'
import './NavBar.css'
import { UserIcon } from '../Icons/UserIcon'
import { useContext } from 'react'
import { AppContext } from '../../../state/AppContext'
import { logout } from '../../../state/user/actions'

export const NavBar = () => {
  const { dispatch } = useContext(AppContext)

  return (
    <nav className='nav-bar'>
      <ul>
        <li><Link to='/profile'><UserIcon /></Link></li>
        <li><Link to='/' onClick={() => dispatch(logout())}><LogoutIcon /></Link></li>
      </ul>
    </nav>
  )
}
