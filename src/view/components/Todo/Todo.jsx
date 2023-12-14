import './Todo.css'

export const Todo = ({ todo }) => {
  return (
    <tr>
      <td><input type='checkbox' name='isCompleted' id='isCompleted' /></td>
      <td>{todo.name}</td>
      <td>{todo.description}</td>
      <td>{todo.finishDate}</td>
      <td>Eliminar | Editar</td>
    </tr>
  )
}
