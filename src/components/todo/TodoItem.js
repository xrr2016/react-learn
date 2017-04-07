import React, { PropTypes } from 'react'

export const TodoItem = (props) => {
  return (
    <li>
      <input type='checkbox' 
      onChange={() => props.handleToggle(props.id)}
      checked={props.isComplete} />
      {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool
}
