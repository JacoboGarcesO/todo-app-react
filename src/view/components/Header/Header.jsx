import { Link } from 'react-router-dom'
import { BrandIcon } from '../Icons/BrandIcon'
import { HamburguerIcon } from '../Icons/HamburguerIcon'
import { TimesIcon } from '../Icons/TimesIcon'
import './Header.css'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navbarClasses = isOpen ? 'header__navbar header__navbar--visible' : 'header__navbar'

  const toggleMenu = () => setIsOpen(prevState => !prevState)

  return (
    <header className='header'>
      <div className='header__brand'>
        <BrandIcon />
        <h1>Todos.zip</h1>
      </div>
      <i className='header__open'><HamburguerIcon size={28} callback={toggleMenu} /></i>
      <nav className={navbarClasses}>
        <ul className='header__menu'>
          <li><Link className='header__link' to='/'>Home</Link></li>
          <li><Link className='header__link' to='/dashboard'>Dashboard</Link></li>
          <li><Link className='header__link header__link--button' to='/auth'>Sign Up</Link></li>
          <li className='header__close'><TimesIcon size={28} callback={toggleMenu} /></li>
        </ul>
      </nav>
    </header>
  )
}
