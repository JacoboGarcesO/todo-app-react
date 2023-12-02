import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import './SignUpForm.css'

export const SignUpForm = () => {
  return (
    <form className='sign-up-form'>
      <Input text='First name:' type='text' name='firstName' id='firstName' />
      <Input text='Last name:' type='text' name='lastName' id='lastName' />
      <Input text='Email:' type='email' name='email' id='email' />
      <Input text='Password:' type='password' name='password' id='password' />
      <Button text='Sign Up' />
    </form>
  )
}
