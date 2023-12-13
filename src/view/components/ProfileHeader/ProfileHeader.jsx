import './ProfileHeader.css'
import { InstagramIcon } from '../Icons/InstagramIcon'
import { XIcon } from '../Icons/XIcon'
import { DribbbleIcon } from '../Icons/DribbbleIcon'
import { ReactIcon } from '../Icons/ReactIcon'
import userLogo from '../../../assets/user.webp'
import { useContext } from 'react'
import { AppContext } from '../../../state/AppContext'

const PHRASES = [
  'Embrace the journey.',
  'Dream big, work hard.',
  'Weave your unique story.',
  'Nurture positivity daily.',
  'Believe, achieve, succeed.'
]

export const ProfileHeader = () => {
  const { state: { currentUser } } = useContext(AppContext)

  const getRandomPhrase = () => {
    return PHRASES[Math.floor(Math.random() * PHRASES.length)]
  }

  return (
    <header className='profile-header'>
      <figure className='profile-header__photo'>
        <img src={userLogo} alt='Generic user Logo for All users' />
        <div>
          <h2 className='profile-header__user'>{currentUser.firstName} {currentUser.lastName}</h2>
          <h3 className='profile-header__phrase'>{getRandomPhrase()}</h3>
        </div>
      </figure>
      <ul className='profile-header__socials'>
        <li><InstagramIcon size={28} /></li>
        <li><XIcon size={28} /></li>
        <li><DribbbleIcon size={28} /></li>
        <li><ReactIcon size={28} /></li>
      </ul>
    </header>
  )
}
