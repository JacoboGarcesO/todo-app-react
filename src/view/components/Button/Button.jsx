import './Button.css'

export const Button = ({ type = 'submit', text, callback }) => {
  return <button onClick={callback} type={type} className='button'>{text}</button>
}
