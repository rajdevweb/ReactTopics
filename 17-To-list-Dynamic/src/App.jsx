import React, { useState } from 'react'
React
import './App.css'
import AddTodo from '../src/components/AddTodo'
import WarningMessage from '../src/components/WarningMessage'
import TodoItems from './TodoItems'
// import TodoItem from './TodoItem'


function App() {
  // let initialTodoItems = [
  //   {
  //     name: "raj vishu",
  //     dueDate : "4/10/24",
  //     status : "completed"
  //   },
  //       {
  //     name: "rajesh patel",
  //     dueDate : "5/10/24",
  //     status : "pending"
  //   },
  //       {
  //     name: "sachin nandi",
  //     dueDate : "7/10/24",
  //     status : "completed"
  //   },
  // ];

  const [todoItem, setTodoItem] = useState([]);

  let handleNewItem = (itemName, Duadate)=>{
    console.log(`New Item Added ${itemName} Date: ${Duadate}`);
    const newTodoItems= [
      ...todoItem,{name : itemName, dueDate : Duadate}
    ]
    setTodoItem(newTodoItems)
  }

  const handleDelete = (itemName, dueDate)=>{
   
  }
  return (
    <>
    <AddTodo onNewItem={handleNewItem}/>  
    {todoItem.length === 0  && <WarningMessage></WarningMessage>}
        
    <TodoItems todoItems={todoItem}></TodoItems>
    </>
  )
}

export default App
