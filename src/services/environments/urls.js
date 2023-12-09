import { environment } from './environment'

export const urls = {
  user: `${environment.apiUrl}/api/user`,
  auth: `${environment.apiUrl}/api/user/auth`,
  todo: `${environment.apiUrl}/api/user/todo`,
  getTodos: (userId, searhTerm, startDate, endDate) => `${environment.apiUrl}/api/user/todo?userId=${userId}&searhTerm=${searhTerm}&startDate=${startDate}&endDate=${endDate}`,
  deleteTodo: todoId => `${environment.apiUrl}/api/user/todo/${todoId}`
}
