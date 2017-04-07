import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoForm, TodoList, Footer } from './components/todo'
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo } from './lib/todoHelpers'
import { pipe, partial } from './lib/utils'

class App extends Component {
    state = {
      todos: [
        {id: 0, name: 'Learn React.', isComplete: true},
        {id: 1, name: 'Learn JSX.', isComplete: false},
        {id: 2, name: 'Learn Redux!', isComplete: false}
      ],
      currentTodo: ''
    }
    
  // constructor () {
  //   super()
  //   this.handleInputChange = this.handleInputChange.bind(this)
  //   this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }
  handleRemove = (id, event) => {
    event.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({todos: updatedTodos})
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    // const todo = findById(id, this.state.todos)
    // const toggled = toggleTodo(todo)
    const updatedTodos = getUpdatedTodos(id, this.state.todos)
    this.setState({todos: updatedTodos})
  }

  handleInputChange = (event) => {
    this.setState({
      currentTodo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // if (this.state.currentTodo.length <= 0) {
    //   return
    // }
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()
    this.setState({
      errorMessage: '请输入TODO的项目名称.'
    })
  }

  render () {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React Todos</h2>
        </div>

        <div className='todo-app'>
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            currentTodo={this.state.currentTodo} />
          <TodoList
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
            todos={this.state.todos} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
