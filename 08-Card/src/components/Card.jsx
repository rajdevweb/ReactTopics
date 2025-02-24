import React from 'react'
React
import Blog from "./Blog"
import bgimage from '../assets/img.png'
import style from "./Card.module.css"
const Card = () => {
  return (
    <>
    <div className='border max-w-5xl px-8 py-10 mx-auto  mt-16'>
        <div className={`${style.bgImage}, rounded-md max-w-80  `} 
        style={{backgroundImage:`url(${bgimage})`,
                backgroundSize:"cover",
                backgroundPosition:'center',
               
        }}
        >
            <div className='px-3 py-3'>
                <p className='text-[15px] text-right text-white'>06 january 2025</p>

            <Blog></Blog>
            </div>
            
        </div>

        
     </div>
    </>
  )
}

export default Card