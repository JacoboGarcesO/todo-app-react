import './TodoForm.css'
import { ArrowForward } from '../Icons/ArrowForward'
import { Button } from '../Button/Button'
import { useContext } from 'react'
import { AppContext } from '../../../state/AppContext'
import { todoActions } from '../../../state/todo/actions'

export const TodoForm = () => {
  const { dispatch, state } = useContext(AppContext)
  const formClasses = state.isVisibleForm ? 'todo-form todo-form--visible' : 'todo-form'

  return (
    <form className={formClasses}>
      <ArrowForward size={20} callback={() => dispatch({ type: todoActions.TOGGLE_FORM })} />
      <h1>Create ToDo</h1>
      <fieldset className='todo-form__section todo-form__section--grid'>
        <div className='todo-form__input'>
          <label htmlFor=''>Name</label>
          <input type='text' />
        </div>
        <div className='todo-form__input'>
          <label htmlFor=''>Due</label>
          <input type='date' />
        </div>
      </fieldset>

      <fieldset className='todo-form__section'>
        <div className='todo-form__input'>
          <label htmlFor=''>Description</label>
          <textarea name='' id='' cols='30' rows='10' />
        </div>

        <div className='todo-form__checkbox'>
          <label htmlFor=''>Completed</label>
          <input type='checkbox' name='' id='' />
        </div>
      </fieldset>
      <Button text='Create' />
    </form>
  )
}
