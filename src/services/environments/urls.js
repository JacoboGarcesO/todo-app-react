import { environment } from './environment'

export const urls = {
  user: `${environment.apiUrl}/api/user`,
  auth: `${environment.apiUrl}/api/user/auth`,
  todo: `${environment.apiUrl}/api/todo`,
  getTodos: ({ filter }) => `${environment.apiUrl}/api/todo${filterToUrl({ filter })}`,
  deleteTodo: todoId => `${environment.apiUrl}/api/todo/${todoId}`
}

const filterToUrl = ({ filter }) => {
  let url = ''

  if (filter?.userId) { url += `?userId=${filter.userId}` }
  if (filter?.startDate) { url += `&startDate=${filter.startDate}` }
  if (filter?.endDate) { url += `&endDate=${filter.endDate}` }
  if (filter?.searchTerm) { url += `&searhTerm=${filter.searchTerm}` }

  return url
}
