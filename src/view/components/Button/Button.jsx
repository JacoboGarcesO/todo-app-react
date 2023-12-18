import './Button.css'

export const Button = ({ type = 'submit', text, callback, classes }) => {
  return <button onClick={callback} type={type} className={`button ${classes}`}>{text}</button>
}
