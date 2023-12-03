import { useState } from 'react'
import { LoginForm } from '../LoginForm/LoginForm'
import { SignUpForm } from '../SignUpForm/SignUpForm'
import './AuthForm.css'

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const contentClasses = isLogin ? 'auth-form__content' : 'auth-form__content auth-form__content--is-login'

  const toggleAuth = () => {
    setIsLogin(prevState => !prevState)
  }

  return (
    <main className='auth-form'>
      <LoginForm />
      <SignUpForm />
      <article className={contentClasses}>
        <div>
          <h1 className='auth-form__title'>{isLogin ? 'Log in' : 'Sign Up'}</h1>
          <h2 className='auth-form__subtitle'>{isLogin ? 'Log in to view your tasks' : 'Register to start planning'}</h2>
        </div>
        <p>
          {isLogin ? 'Nothing has changed since the last time you left, log in to continue managing your tasks!' : 'With Todos.zip you can manage your tasks, mark them as completed, search for tasks by name, by date.'}
        </p>
        <p>
          To enjoy all the benefits of Todos.zip, {isLogin ? 'log in now!' : 'register now!'}
        </p>
        <p style={{ fontSize: '12px' }}>{isLogin ? 'Don\'t' : 'Already'} have account? <button className='auth-form__button' type='button' onClick={toggleAuth}>{isLogin ? 'Sign Up' : 'Log in'}</button></p>
      </article>
    </main>
  )
}
