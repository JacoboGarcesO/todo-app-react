import { useContext, useState } from 'react'
import userLogo from '../../../assets/user.webp'
import { AppContext } from '../../../state/AppContext'
import { DribbbleIcon } from '../Icons/DribbbleIcon'
import { InstagramIcon } from '../Icons/InstagramIcon'
import { ReactIcon } from '../Icons/ReactIcon'
import { XIcon } from '../Icons/XIcon'
import './ProfileHeader.css'
import { TodosProgress } from '../TodosProgress/TodosProgress'

const PHRASES = [
  'Embrace the journey.',
  'Dream big, work hard.',
  'Weave your unique story.',
  'Nurture positivity daily.',
  'Believe, achieve, succeed.'
]

export const ProfileHeader = () => {
  const getRandomPhrase = () => {
    return PHRASES[Math.floor(Math.random() * PHRASES.length)]
  }

  const [phrase] = useState(getRandomPhrase())
  const { state: { currentUser } } = useContext(AppContext)

  return (
    <header className='profile-header'>
      <figure className='profile-header__photo'>
        <img src={userLogo} alt='Generic user Logo for All users' />
        <div>
          <h2 className='profile-header__user'>{currentUser.firstName} {currentUser.lastName}</h2>
          <h3 className='profile-header__phrase'>{phrase}</h3>
        </div>
      </figure>
      <TodosProgress />
      <ul className='profile-header__socials'>
        <li><InstagramIcon size={28} /></li>
        <li><XIcon size={28} /></li>
        <li><DribbbleIcon size={28} /></li>
        <li><ReactIcon size={28} /></li>
      </ul>
    </header>
  )
}
