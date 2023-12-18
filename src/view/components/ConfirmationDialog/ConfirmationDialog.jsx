import { useContext } from 'react'
import './ConfirmationDialog.css'
import { AppContext } from '../../../state/AppContext'
import { setTodoToDelete, toggleDialog } from '../../../state/todo/actions'
import { Button } from '../Button/Button'

export const ConfirmationDialog = ({ confirmationCallback, message, title }) => {
  const { state, dispatch } = useContext(AppContext)

  if (!state.showDialog) return

  return (
    <section className='confirmation-dialog'>
      <article className='confirmation-dialog__content'>
        <header className='confirmation-dialog__header'><h1>{title}</h1></header>
        <main className='confirmation-dialog__message'><h3>{message}</h3></main>
        <footer className='confirmation-dialog__footer'>
          <Button text='Ok' classes='button--active' callback={() => confirmationCallback(state.todoToDelete._id)} />
          <Button
            text='Cancel'
            classes='button--cancel'
            callback={() => {
              dispatch(toggleDialog())
              dispatch(setTodoToDelete({ todo: null }))
            }}
          />
        </footer>
      </article>
    </section>
  )
}
