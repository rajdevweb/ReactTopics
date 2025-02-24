import React from 'react'
React
import './App.css'
import Errormassage from './Errormassage'
import Vegetable from './Vegetable'




const App = () => {
  let vegItem = ["tomato","potato","carret","brocoli","capsicum"]
  // let vegItem = []
  return (
   <>
   <h1>Healthy Vegetable for winter</h1>
   <Errormassage item={vegItem} />
   <Vegetable item={vegItem} />
    
   </>
  )
}

export default App