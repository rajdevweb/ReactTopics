import React from 'react'
React

const India_clock = () => {
   let  time = new Date();

  return (
    <>
    
    <div className='border px-6 py-12 max-w-5xl mt-16 mx-auto lg:px-8 lg:mt-32'>

        <div className=''>
        <h1 className='text-center text-3xl font-medium'>Todo App</h1>
        <div className='h1  border-gray-500 border-b-2 w-full bg-gray rounded-lg pt-2'></div>
        </div>
      
       <div className='text-center mt-4   '>
        <p>This is Clock that shows the time in India at all Times</p>
        <h3 className=''>This is Current Time</h3>
        <h3 className='dark:bg-slate-800 w-full text-center text-white  block p-5'>{time.toLocaleDateString()} - {time.toLocaleTimeString()}</h3>
        
         
        </div>


     
    
     </div> 
    </>
  )
}

export default India_clock