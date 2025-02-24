import React from 'react'
import TodoItems from './TodoItems'

const TodoItem = ({todoName, todoDate}) => {
  return (
    <div>
      <h1>{todoName}</h1>
      <p>{todoDate}</p>
      <button type='button'>Delete</button>
    </div>
  )
}

export default TodoItem