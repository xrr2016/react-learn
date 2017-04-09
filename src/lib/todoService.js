const baseUrl = 'http://localhost:8000/todos'

export const loadTodos = () => {
  return fetch(baseUrl)
    .then(res => res.json())
    .catch(e => console.log(e))
}

export const createTodo = (todo) => {
  return fetch(baseUrl, {
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
              },
              body: JSON.stringify(todo)
            })
            .then(res => res.json())
}
