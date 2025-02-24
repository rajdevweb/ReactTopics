import React from 'react'
import TodoName from './AppName'
import { useState } from 'react'
React
const AddTodo = ({onNewItem}) => {
    const [todoName, setTodoName] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleTodoName = (e) =>{
        setTodoName(e.target.value)
    }

    const handleDueDate = (e) =>{
        setDueDate(e.target.value)
    }

    const handleSubmit = () =>{
        onNewItem(todoName, dueDate);
        todoName("")
        dueDate("")
    }
  return (
  <>
  <div className='max-w-5xl mx-auto'>
    <TodoName/>
    <div className='flex gap-4'>
        <input  onChange={handleTodoName} value={todoName} className=' border' type="text" />
        <input onChange={handleDueDate} value={dueDate} className='border' type="date" />
        <button className='border bg-green-200' type='button' onClick={handleSubmit}>Add</button>
    </div>
  </div>
  </>
  )
}

export default AddTodo