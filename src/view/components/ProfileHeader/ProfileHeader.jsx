import { useContext, useState } from 'react'
import userLogo from '../../../assets/user.webp'
import { AppContext } from '../../../state/AppContext'
import { TodosProgress } from '../TodosProgress/TodosProgress'
import './ProfileHeader.css'

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
    </header>
  )
}
