import { useContext } from 'react'
import { AppContext } from '../../../state/AppContext'
import './TodosTable.css'
import { Todo } from '../Todo/Todo'

export const TodosTable = () => {
  const { state: { todos } } = useContext(AppContext)

  return (
    <section className='todos-container'>
      <table className='todos-table'>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Description</th>
            <th>Due</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => <Todo key={todo._id} todo={todo} />)}
        </tbody>
      </table>
      <span className='todos-table__count'> Count: {todos.length}</span>
    </section>
  )
}
