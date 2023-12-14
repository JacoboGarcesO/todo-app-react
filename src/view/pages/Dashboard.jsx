import { ProfileHeader } from '../components/ProfileHeader/ProfileHeader'
import { Container } from '../components/Container/Container'
import { TodosTable } from '../components/TodosTable/TodosTable'

export const Dashboard = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '24px',
    marginBlock: '24px'
  }

  return (
    <Container styles={containerStyles}>
      <ProfileHeader />
      <TodosTable />
    </Container>
  )
}
