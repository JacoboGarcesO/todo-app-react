import './HomeContent.css'
import { Link } from 'react-router-dom'

export const HomeContent = () => {
  return (
    <section className='home-content'>
      <h1 className='home-content__title'>Welcome to <span>Todos.zip</span>, your favorite place to manage tasks.</h1>
      <Link className='home-content__button' to='/auth'>Get Started</Link>
    </section>
  )
}
