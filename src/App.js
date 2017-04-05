import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoForm, TodoList } from './components/todo'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: [
        {id: 0, name: 'Learn React.', isComplete: true},
        {id: 1, name: 'Learn JSX.', isComplete: false},
        {id: 2, name: 'Learn Redux!', isComplete: false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange (event) {
    this.setState({
      currentTodo: event.target.value
    })
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React Todos</h2>
        </div>
        <div className='todo-app'>
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    )
  }
}

export default App
