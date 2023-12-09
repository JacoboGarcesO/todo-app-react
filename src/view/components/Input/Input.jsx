import './Input.css'

export const Input = ({ type, name, id, text, pattern, minLength = 0 }) => {
  return (
    <div className='input'>
      <input id={id} name={name} type={type} pattern={pattern} minLength={minLength} required />
      <label htmlFor={id}>
        {text.split('').map((value, index) => (
          <span key={value + index} style={{ transitionDelay: `${50 * index}ms` }}>{value}</span>
        ))}
      </label>
    </div>
  )
}
