import './Button.css'

export const Button = ({ type = 'submit', text }) => {
  return <button type={type} className='button'>{text}</button>
}
