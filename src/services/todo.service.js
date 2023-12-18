import { urls } from './environments/urls'
import * as http from './general.service'

export const get = ({ filter }) => {
  const url = urls.getTodos({ filter })
  return http.get({ url })
    .then(response => {
      if (response.ok) {
        return response.json()
      }

      throw response.json()
    })
    .then(({ todos }) => todos)
}

export const create = ({ body }) => {
  return http.post({ url: urls.todo, body })
    .then(response => {
      if (response.ok) {
        return response.json()
      }

      throw response.json()
    })
    .then(({ todo }) => todo)
}

export const update = ({ body }) => {
  return http.put({ url: urls.todo, body })
    .then(response => {
      if (response.ok) {
        return response.json()
      }

      throw response.json()
    })
    .then(({ todo }) => todo)
}

export const _delete = ({ todoId }) => {
  return http._delete({ url: urls.deleteTodo(todoId) })
    .then(response => {
      if (response.ok) {
        return response.json()
      }

      throw response.json()
    })
    .then(({ todo }) => todo)
}
