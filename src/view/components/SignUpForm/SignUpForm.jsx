import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../../services/user.service'
import { AppContext } from '../../../state/AppContext'
import { registerSuccess } from '../../../state/user/actions'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import './SignUpForm.css'

export const SignUpForm = () => {
  const [error, setError] = useState()
  const navigate = useNavigate()
  const { dispatch } = useContext(AppContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    setError(null)
    const body = [...event.target.elements]
      .reduce((body, element) => {
        return element.name ? { ...body, [element.name]: element.value } : body
      }, {})

    register({ body })
      .then((user) => {
        dispatch(registerSuccess({ user }))
        navigate('/dashboard')
      })
      .catch(err => err.then(({ error }) => setError(error)))
  }
  return (
    <form className='sign-up-form' onSubmit={handleSubmit}>
      {error && <span className='sign-up-form__alert'>{error}</span>}
      <Input text='First name:' type='text' name='firstName' id='firstName' />
      <Input text='Last name:' type='text' name='lastName' id='lastName' />
      <Input text='Email:' type='email' name='email' id='email' />
      <Input text='Password:' type='password' name='password' id='password' minLength={8} />
      <Button text='Sign Up' />
    </form>
  )
}
