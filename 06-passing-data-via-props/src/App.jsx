import React from 'react'
import Item from '../src/Item';
React


const App = () => {
  let foodItem = ["Rice", "Paneer", "Dal","Roti","dahi"];
  return (
     <>
     <h1>Food Item</h1>
      <ol className='list-group'>
       {foodItem.map((item)=>(
        <Item key="item" foodItem={item}></Item>
       ))}
     </ol>
     </>
    
  )
}

export default App