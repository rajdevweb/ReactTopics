import React from 'react'
React
import './App.css'
import Container from "./Container"
import Megacontainer from './Megacontainer'

const App = () => {
  return (
   <>
   <Megacontainer>
    <Container></Container>
     <Megacontainer>
    asas
   </Megacontainer>
    </Megacontainer>

 <Megacontainer>
    <input type="text" placeholder='inter the value' />
   </Megacontainer>
  
   </>
  )
}

export default App