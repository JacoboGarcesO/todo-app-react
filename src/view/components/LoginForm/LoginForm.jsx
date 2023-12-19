import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authentication } from '../../../services/user.service'
import { AppContext } from '../../../state/AppContext'
import { authSuccess } from '../../../state/user/actions'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import './LoginForm.css'

export const LoginForm = () => {
  const { dispatch } = useContext(AppContext)
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    setError(null)
    const body = [...event.target.elements]
      .reduce((body, element) => {
        return element.name ? { ...body, [element.name]: element.value } : body
      }, {})

    authentication({ body })
      .then((user) => {
        dispatch(authSuccess({ user }))
        navigate('/dashboard')
      })
      .catch(err => err.then(({ error }) => setError(error)))
  }

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      {error && <span className='login-form__alert'>{error}</span>}
      <Input text='Email:' type='email' name='email' id='login-email' />
      <Input text='Password:' type='password' name='password' id='login-password' minLength={8} />
      <Button text='Login' />
    </form>
  )
}
