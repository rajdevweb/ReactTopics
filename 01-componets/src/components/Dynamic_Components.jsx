import React from 'react'
React
const Dynamic_Components = () => {
  
  // let hiddenElement = ()=>{
  // let myElement = document.getElementById("hidden-element")
  // if(myElement.style.display === "none"){
  // myElement.style.display = "block"
  // }else{
  //   myElement.style.display = "block"
  // }
  // }

  let num = "85%"
  let name = ()=>{
     return "raj vishwakarma"
  }

  return (
   <>
    <p id='hidden-element' className='bg-yellow-400 w-fit py-2 px-5 font-medium rounded  text-xl mt-5 ' >your percetage is {num} he my name is {name()} </p>
    <button >Click</button>
   </>
  )
}

export default Dynamic_Components