import React from 'react'
React
// import style from './App.module.css'
import style from "./Cal.module.css"
import Inputs from "./components/Input"
import ButtonContainer from './components/ButtonContainer'
import { useState } from 'react'



const Cal = () => {
  let [calVal, setCalVal] = useState("")
  const onButtonClick = (buttonText) =>{
    if(buttonText === "C"){
      setCalVal("")
    }else if(buttonText === "="){
      let result = (eval(calVal))
      setCalVal(result)
    }else{
     let newDisplayInput = calVal + buttonText;
     setCalVal(newDisplayInput)
    }
  }

  return (
    <>
    <div className='mainContainer  px-5 py-12 max-w-7xl w-72 mt-16 mx-auto lg:px-4 lg:mt-32  bg-sky-100 rounded-xl'>
      
        <Inputs DisplayValue={calVal}></Inputs>
        <div className='btnContainer  p-2 '>
         <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
        </div>
    </div>
    </>
  )
}

export default Cal