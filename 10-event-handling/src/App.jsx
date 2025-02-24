import React from 'react'
import './App.css'
import AlertEvent from './AlertEvent';

const App = () => {
   let indCuisine = ["panner ki sabji", "veg biryani", "chinese", "manchuriyan", "dal fry", "roti", "rice", "gulab jamun"];

  //  const onClick=()=>{
  //   console.log(`${item} being`);
    
  //  }

  return (
  <>
   <div className='max-w-80 flex flex-col justify-center px-8 py-10 mx-auto border mt-28 '>
     <h1 className='text-center text-2xl'>Indian Cuisine</h1>
     <input className='border p-2 rounded-md' placeholder='enter the item here ' type="text" />
     <ul className='flex flex-col flex-wrap w-62  '>
      {indCuisine.map((item)=>(
        <li className='border p-2 rounded-lg mt-1
        ' key={item}>
          {item}
          <button onClick={()=>{
            console.log({item})
          }} className='float-end border px-2 py-1 rounded-lg bg-orange-400'>Order</button>
        </li>
      ))}
     </ul>
     <AlertEvent></AlertEvent>
   </div>
  </>
  )
}

export default App