import React from 'react'
React
import css from "./Vegetable.module.css"

const Veg = ({item}) => {
  return (
<>
<ul className={`${css["container"]}`}>
      {item.map((item)=>(
        <li className={`${css["container"]}`} key={item}> {item} </li>
      ))}
    </ul>
</>
  )
}

export default Veg