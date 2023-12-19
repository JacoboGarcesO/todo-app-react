import { useContext } from 'react'
import { AppContext } from '../../../state/AppContext'
import { Todo } from '../Todo/Todo'
import { TodoFilters } from '../TodoFilters/TodoFilters'
import './TodosTable.css'

export const TodosTable = () => {
  const { state: { todos } } = useContext(AppContext)

  return (
    <section className='todos-container'>
      <TodoFilters />
      <section className='todos-table__wrapper'>
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
      </section>
      <span className='todos-table__count'> Count: {todos.length}</span>
    </section>
  )
}
