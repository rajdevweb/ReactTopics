import React from 'react'
import style from './input.module.css'




const Input = ({DisplayValue}) => {
  return (
    <>
        <div className='inputContainer border  flex justify-center h-10  '>
            <input className={style.inputBox} value={DisplayValue} readOnly type="text"/>
        </div>
    </>
  )
}

export default Input