import { useContext, useState } from 'react'
import { create, update } from '../../../services/todo.service'
import { AppContext } from '../../../state/AppContext'
import { createSuccess, setTodoToUpdate, toggleForm, updateSuccess } from '../../../state/todo/actions'
import { Button } from '../Button/Button'
import { ArrowForward } from '../Icons/ArrowForward'
import './TodoForm.css'

export const TodoForm = () => {
  const { dispatch, state } = useContext(AppContext)
  const formClasses = state.isVisibleForm ? 'todo-form todo-form--visible' : 'todo-form'
  const [error, setError] = useState()

  const actionText = state.todoToUpdate ? 'Update' : 'Create'

  const handleSubmit = (event) => {
    event.preventDefault()
    setError(null)
    const formData = new FormData(event.target)
    let body = Object.fromEntries(formData.entries())

    body = {
      ...body,
      isCompleted: event.target.elements.isCompleted.checked,
      userId: state.currentUser._id
    }

    state.todoToUpdate
      ? updateTodo({ body, target: event.target })
      : createTodo({ body, target: event.target })
  }

  const createTodo = ({ body, target }) => {
    create({ body })
      .then((todo) => {
        dispatch(createSuccess({ todo }))
        dispatch(toggleForm())
        target.reset()
      })
      .catch(err => err.then(({ error }) => setError(error)))
  }

  const updateTodo = ({ body, target }) => {
    update({
      body: {
        ...body,
        _id: state.todoToUpdate._id
      }
    })
      .then((todo) => {
        dispatch(updateSuccess({ todo }))
        dispatch(toggleForm())
        target.reset()
      })
      .catch(err => err.then(({ error }) => setError(error)))
  }

  const handleGoBack = () => {
    dispatch(toggleForm())
    dispatch(setTodoToUpdate({ todo: null }))
  }

  return (
    <form onSubmit={handleSubmit} className={formClasses} id='todo-form'>
      <ArrowForward size={20} callback={handleGoBack} />
      <h1>{actionText} ToDo</h1>
      {error && <span className='login-form__alert'>{error}</span>}
      <fieldset className='todo-form__section todo-form__section--grid'>
        <div className='todo-form__input'>
          <label htmlFor='name'>Name</label>
          <input defaultValue={state.todoToUpdate?.name} minLength={3} type='text' name='name' id='name' required />
        </div>
        <div className='todo-form__input'>
          <label htmlFor='finishDate'>Due</label>
          <input defaultValue={state.todoToUpdate?.finishDate.split('T')[0]} type='date' id='finishDate' name='finishDate' required />
        </div>
      </fieldset>

      <fieldset className='todo-form__section'>
        <div className='todo-form__input'>
          <label htmlFor='description'>Description</label>
          <textarea defaultValue={state.todoToUpdate?.description ?? ''} minLength={3} name='description' id='description' rows='10' />
        </div>

        <div className='todo-form__checkbox'>
          <label htmlFor='isCompleted'>Completed</label>
          <input defaultChecked={state.todoToUpdate?.isCompleted ?? false} type='checkbox' name='isCompleted' id='isCompleted' />
        </div>
      </fieldset>
      <Button text={actionText} />
    </form>
  )
}
