import React from 'react'

const Errormassage = ({item}) => {
  return (
<>
    {item.length === 0 && <h1>I am still hungry</h1>}

</>
  )
}

export default Errormassage