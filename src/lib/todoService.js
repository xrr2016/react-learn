const baseUrl = 'http://localhost:8000/todos'

export const loadTodos = () => {
  return fetch(baseUrl)
    .then(res => res.json())
    .catch(e => console.log(e))
}

export const createTodo = (todo) => {
  return fetch(baseUrl, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
              },
              body: JSON.stringify(todo)
            })
            .then(res => res.json())
}

export const saveTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
              },
              body: JSON.stringify(todo)
            })
            .then(res => res.json())
}

export const deleteTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
              }
            })
}