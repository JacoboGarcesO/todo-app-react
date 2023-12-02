import './Container.css'

export const Container = ({ children, styles }) => {
  return (
    <section className='container' style={styles}>
      {children}
    </section>
  )
}
