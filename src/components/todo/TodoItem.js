import React, { PropTypes } from 'react'

export const TodoItem = (props) => {
  return (
    <li>
      <input type='checkbox' defaultChecked={props.isComplete} />
      {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool
}
