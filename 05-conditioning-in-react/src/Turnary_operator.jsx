import React from 'react'
React

const Turnary_operator = () => {
    let student = ["krishna","madhava","madhusudhan","shayama","narayan",]
    // let student = []

    let turnary = student.length === 0 ? <h1>please he krishna</h1> : null 
   
  return (
   <>
   {/* method 1 */}
    {/* <h1>studentn name</h1>
    <ul>
        {student.length === 0 ? <h1>please he krishna</h1> : null }
        {student.map((item)=>(
            <li key={item}>{item}</li>
        ))} 
    </ul> */}

    <h1>studentn name</h1>
    <ul>
        {turnary}
        {student.map((item)=>(
            <li key={item}>{item}</li>
        ))} 
    </ul>
   </>
  )
}

export default Turnary_operator