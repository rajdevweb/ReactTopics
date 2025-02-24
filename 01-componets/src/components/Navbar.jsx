import React from 'react'

const navbar = () => {
  return (
    <>
     <nav className='flex justify-between px-5 bg-gray-800 text-white py-2'>
        <h1>BeYoung</h1>
        <div className='gap-[25px] flex'>
            <a href="#" className="font-medium  hover:text-dark-electric-violet">Home</a>
            <a href="#" className="font-medium hover:text-dark-electric-violet">About</a>
            <a href="#" className="font-medium hover:text-dark-electric-violet">Blog</a>
            <a href="#" className="font-medium hover:text-dark-electric-violet">New Arrival</a>
            <a href="#" className="font-medium hover:text-dark-electric-violet">Contact</a>
        </div>
        <div>
            <button>Sign up</button>
        </div>
     </nav>
    </>
  )
}

export default navbar