import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: [
        {id: 0, name: 'Learn React.', isComplete: false},
        {id: 1, name: 'Learn JSX.', isComplete: false},
        {id: 2, name: 'Learn Redux!', isComplete: false}
      ]
    }
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React Todos</h2>
        </div>
        <div className='todo-app'>
          <form>
            <input type='text' />
          </form>
          <div className='todo-list'>
            <ul>
              {this.state.todos.map(todo =>
                <li key={todo.id}><input type='checkbox' />{todo.name}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
