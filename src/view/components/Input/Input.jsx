import './Input.css'

export const Input = ({ type, name, id, text }) => {
  return (
    <div className='form-control'>
      <input id={id} name={name} type={type} required />
      <label htmlFor={id}>
        {text.split('').map((value, index) => (
          <span key={value + index} style={{ transitionDelay: `${50 * index}ms` }}>{value}</span>
        ))}
      </label>
    </div>
  )
}
