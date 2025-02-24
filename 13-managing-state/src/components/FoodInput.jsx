import React from 'react'

const FoodInput = ({handleKeyDown}) => {
  
  return (
    <>
    <input onKeyDown={handleKeyDown}  className='border text-1xl w-62 m-2 h-10 rounded-lg' placeholder='enter the item here ' type="text"  />
    </>
  )
}

export default FoodInput