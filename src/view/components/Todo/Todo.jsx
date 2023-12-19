import { useContext } from 'react'
import { update } from '../../../services/todo.service'
import { AppContext } from '../../../state/AppContext'
import { setTodoToDelete, setTodoToUpdate, toggleDialog, toggleForm, updateSuccess } from '../../../state/todo/actions'
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

  const updateTodo = () => {
    update({ body: { ...todo, isCompleted: !todo.isCompleted } })
      .then((todo) => {
        dispatch(updateSuccess({ todo }))
      })
  }

  return (
    <tr className={todoClasses}>
      <td>
        <input
          type='checkbox'
          name='isCompleted'
          id='isCompleted'
          defaultChecked={todo.isCompleted}
          onChange={updateTodo}
        />
      </td>
      <td>{todo.name}</td>
      <td>{todo.description}</td>
      <td>{formatDate(todo.finishDate)}</td>
      <td>
        <div className='todo__actions'>
          <EditIcon size={24} callback={saveUpdateToUpdate} />
          <TrashIcon
            size={24}
            callback={() => {
              dispatch(toggleDialog())
              dispatch(setTodoToDelete({ todo }))
              window.scrollTo(0, 0)
            }}
          />
        </div>
      </td>
    </tr>
  )
}
