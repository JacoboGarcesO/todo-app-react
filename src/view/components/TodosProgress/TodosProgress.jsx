import { useContext } from 'react'
import { AppContext } from '../../../state/AppContext'
import './TodosProgress.css'

export const TodosProgress = () => {
  const { state: { todos } } = useContext(AppContext)

  const completedPercentage = todos.length ? Math.floor(todos.filter((todo) => todo.isCompleted).length * 100 / todos.length) : 0
  const progressBarStyles = {
    background: `conic-gradient(#7d2ae8 ${Math.floor(360 * completedPercentage / 100)}deg, #000 0deg)`
  }

  return (
    <section className='todos-progress'>
      <span>{completedPercentage}%</span>
      <div className='todos-progress__value' style={progressBarStyles} />
    </section>
  )
}
