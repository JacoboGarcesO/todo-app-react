const OPTIONS = { headers: { 'Content-Type': 'application/json' } }

export const get = ({ url }) => fetch(url, OPTIONS)
export const post = ({ url, body }) => fetch(url, { ...OPTIONS, method: 'POST', body: JSON.stringify(body) })
export const put = ({ url, body }) => fetch(url, { ...OPTIONS, method: 'PUT', body: JSON.stringify(body) })
export const _delete = ({ url }) => fetch(url, { ...OPTIONS, method: 'DELETE' })
