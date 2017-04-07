import React, { PropTypes } from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = (props) => {
  return (
    <div className='todo-list'>
      <ul>
        {props.todos.map(todo => <TodoItem
          handleToggle={props.handleToggle}
          handleRemove={props.handleRemove}
          key={todo.id} {...todo} />)}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}
