import { urls } from './environments/urls'
import * as http from './general.service'

export const register = ({ body }) => {
  return http.post({ url: urls.user, body })
    .then(response => {
      if (response.ok) {
        return response.json()
      }

      throw response.json()
    })
    .then(({ user }) => user)
}

export const authentication = ({ body }) => {
  return http.post({ url: urls.auth, body })
    .then(response => {
      if (response.ok) {
        return response.json()
      }

      throw response.json()
    })
    .then(({ user }) => user)
}
