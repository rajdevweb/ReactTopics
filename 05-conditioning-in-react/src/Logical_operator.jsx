import React from 'react'
React

const Logical_operator = () => {
    let student = ["krishna","madhava","madhusudhan","shayama","narayan",]
    // let student = []

  let logical = student.length === 0 && <h1>please he krishna</h1>
  return (
   <>
    <h1>studentn name Logical</h1>
    <ul>
        {logical}
        {student.map((item)=>(
            <li key={item}>{item}</li>
        ))} 
    </ul>
   </>
  )
}

export default Logical_operator