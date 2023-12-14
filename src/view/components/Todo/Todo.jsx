import { EditIcon } from '../Icons/EditIcon'
import { TrashIcon } from '../Icons/TrashIcon'
import './Todo.css'

export const Todo = ({ todo }) => {
  return (
    <tr>
      <td><input type='checkbox' name='isCompleted' id='isCompleted' /></td>
      <td>{todo.name}</td>
      <td>{todo.description}</td>
      <td>{todo.finishDate}</td>
      <td>
        <div className='todo__actions'>
          <EditIcon size={24} />
          <TrashIcon size={24} />
        </div>
      </td>
    </tr>
  )
}
