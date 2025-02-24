import React from 'react'

const TodoList = () => {
  return (
    <>
     <div className='border px-6 py-12 max-w-5xl mt-16 mx-auto lg:px-8 lg:mt-32'>

        <div className=''>
        <h1 className='text-center text-3xl font-medium'>Todo App</h1>
        <div className='h1  border-gray-500 border-b-2 w-full bg-gray rounded-lg pt-2'></div>
        </div>
    
        <div className='flex gap-5 mx-5 items-center grid grid-cols-3'>
      <div className='row-start-1 row-end-3'>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>

        <div className='row-start-1 row-end-3'>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="date" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>

       <div className='row-start-1 row-end-3'>
            {/* <label className="text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="submit" id="first_name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="John" required /> */}
            <input type="submit" value={"ADD"} className='block dark:bg-green-600 mt-6 p-2.5 w-full text-white rounded-lg dark:focus:border-gray-500'/>
        </div>

        

        
    </div>



 <div className='flex gap-5 mx-5 items-center grid grid-cols-3'>
      <div className='row-start-1 row-end-3'>
            {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required /> */}
            <p className='text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>Buy Milk</p>
        </div>

        <div className='row-start-1 row-end-3'>
            {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="date" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required /> */}
            <p className='text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>26/12/2024</p>
        </div>

       <div className='row-start-1 row-end-3'>
            {/* <label className="text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="submit" id="first_name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="John" required /> */}
            <input type="submit" value={"Delete"} className='block dark:bg-red-600 mt-6 p-2.5 w-full text-white rounded-lg dark:focus:border-gray-500'/>
        </div>

        

        
    </div>
     <div className='flex gap-5 mx-5 items-center grid grid-cols-3'>
      <div className='row-start-1 row-end-3'>
            {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required /> */}
             <p className='text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>Buy Milk</p>
        </div>

        <div className='row-start-1 row-end-3'>
            {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="date" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required /> */}
                   <p className='text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '>26/12/2024</p>

        </div>

       <div className='row-start-1 row-end-3'>
            {/* <label className="text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="submit" id="first_name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="John" required /> */}
            <input type="submit" value={"Delete"}  className='block dark:bg-red-600 mt-6 p-2.5 w-full text-white rounded-lg dark:focus:border-gray-500'/>
        </div>

        

        
    </div>
    
     </div>
    </>
  )
}

export default TodoList