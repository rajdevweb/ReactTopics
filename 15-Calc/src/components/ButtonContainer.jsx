import React from 'react'
React
import style from "./ButtonContainer.module.css" 
const ButtonContainer = ({onButtonClick}) => {
  let buttonCollection =["C","+","-","%","/","7","8","9","X","4","5","6","1","2","3","-","0",".",".","=",]

  return (
  <>
   <div className='mt-2 flex gap-3 flex-wrap justify-center'>
    {buttonCollection.map((btnlist)=>(
      <button onClick={()=>onButtonClick(btnlist)} key={btnlist} className={`${style.btn} text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg   text-center  `}>{btnlist}</button>
    ))}      
         
   </div>
  </>
  )
}

export default ButtonContainer
{/* <button className={`${style.btn} bg-cyan-300`}>C</button> */}