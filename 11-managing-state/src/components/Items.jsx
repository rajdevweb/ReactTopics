import React from 'react'

const Items = ({foodItem, handleBuyButton}) => {
 
  //  let item = (event)=>{
  //   // console.log(event);
    
  //   console.log(`${foodItem} being`);
    
  //  }

  return (
   <li className='flex justify-between  items-center p-2'>{foodItem}
   <button onClick={handleBuyButton} className='bg-indigo-500 text-white rounded-lg p-2 '>BUY</button>
   </li>
  )
}

export default Items