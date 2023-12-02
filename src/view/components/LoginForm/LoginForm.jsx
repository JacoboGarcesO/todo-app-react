import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import './LoginForm.css'

export const LoginForm = () => {
  return (
    <form className='login-form'>
      <Input text='Email:' type='email' name='email' id='login-email' />
      <Input text='Password:' type='password' name='password' id='login-password' />
      <Button text='Login' />
    </form>
  )
}
