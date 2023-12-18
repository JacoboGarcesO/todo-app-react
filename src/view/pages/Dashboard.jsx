import { ProfileHeader } from '../components/ProfileHeader/ProfileHeader'
import { Container } from '../components/Container/Container'
import { TodosTable } from '../components/TodosTable/TodosTable'
import { TodoForm } from '../components/TodoForm/TodoForm'
import { _delete } from '../../services/todo.service'
import { deleteSuccess, setTodoToDelete } from '../../state/todo/actions'
import { ConfirmationDialog } from '../components/ConfirmationDialog/ConfirmationDialog'
import { useContext } from 'react'
import { AppContext } from '../../state/AppContext'
import { NavBar } from '../components/NavBar/NavBar'

export const Dashboard = () => {
  const { dispatch } = useContext(AppContext)

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '24px',
    marginBlock: '24px',
    marginBottom: '116px'
  }

  const deleteTodo = (todoId) => {
    _delete({ todoId })
      .then((todo) => {
        dispatch(deleteSuccess({ todoId: todo._id }))
        dispatch(setTodoToDelete({ todo: null }))
      })
  }

  return (
    <Container styles={containerStyles}>
      <ProfileHeader />
      <TodosTable />
      <TodoForm />
      <ConfirmationDialog confirmationCallback={deleteTodo} title='Delete ToDo' message='Are you sure you want to delete the ToDo?' />
      <NavBar />
    </Container>
  )
}
