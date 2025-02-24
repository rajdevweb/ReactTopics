import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({todoItems}) => {
  return (
   <>
   {todoItems.map((item)=>(
    <TodoItem key={item.name} todoDate = {item.dueDate} todoName = {item.name} />
   ))}
   </>
  )
}

export default TodoItems