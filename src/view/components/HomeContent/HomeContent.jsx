import { Link } from 'react-router-dom'
import { Container } from '../Container/Container'
import './HomeContent.css'

export const HomeContent = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '100px',
    minHeight: 'calc(100vh - 80px)'
  }

  return (
    <section className='home-content'>
      <Container styles={containerStyles}>
        <h1 className='home-content__title'>Welcome to <span>Todos.zip</span>, your favorite place to manage tasks.</h1>
        <Link className='home-content__button' to='/dashboard'><span>Get Started</span></Link>
      </Container>
    </section>
  )
}
