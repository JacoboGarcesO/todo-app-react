import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../state/AppContext'
import { getSuccess, todoActions } from '../../../state/todo/actions'
import { Button } from '../Button/Button'
import './TodoFilters.css'
import { get } from '../../../services/todo.service'

export const TodoFilters = () => {
  const { dispatch, state } = useContext(AppContext)
  const [filter, setFilter] = useState({
    userId: state.currentUser._id,
    searchTerm: null,
    startDate: null,
    endDate: null
  })

  useEffect(() => {
    get({ filter })
      .then((todos) => {
        dispatch(getSuccess({ todos }))
      })
  }, [filter])

  return (
    <section className='todo-filters'>
      <form className='todo-filters__form'>
        <div className='todo-filters__input'>
          <label htmlFor='name'>Name</label>
          <input type='text' placeholder='Search...' id='name' />
        </div>
        <div className='todo-filters__input'>
          <label htmlFor='start-date'>Start date</label>
          <input type='date' id='start-date' />
        </div>
        <div className='todo-filters__input'>
          <label htmlFor='finish-date'>Finish date</label>
          <input type='date' id='finish-date' />
        </div>
      </form>
      <Button type='button' text='New' callback={() => dispatch({ type: todoActions.TOGGLE_FORM })} />
    </section>
  )
}
