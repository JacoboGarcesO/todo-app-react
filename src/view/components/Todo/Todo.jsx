import { useContext } from 'react'
import { AppContext } from '../../../state/AppContext'
import { setTodoToUpdate, toggleForm } from '../../../state/todo/actions'
import { EditIcon } from '../Icons/EditIcon'
import { TrashIcon } from '../Icons/TrashIcon'
import './Todo.css'

export const Todo = ({ todo }) => {
  const { dispatch } = useContext(AppContext)

  const formatDate = date => {
    return new Date(date).toDateString()
  }

  const todoClasses = todo.isCompleted ? 'todo todo--is-completed' : 'todo'

  const saveUpdateToUpdate = () => {
    dispatch(setTodoToUpdate({ todo }))
    dispatch(toggleForm())
  }

  // const deleteTodo = () => {

  // }

  return (
    <tr className={todoClasses}>
      <td><input type='checkbox' name='isCompleted' id='isCompleted' defaultChecked={todo.isCompleted} /></td>
      <td>{todo.name}</td>
      <td>{todo.description}</td>
      <td>{formatDate(todo.finishDate)}</td>
      <td>
        <div className='todo__actions'>
          <EditIcon size={24} callback={saveUpdateToUpdate} />
          <TrashIcon size={24} />
        </div>
      </td>
    </tr>
  )
}
