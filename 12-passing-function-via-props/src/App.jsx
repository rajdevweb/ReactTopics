import react from 'react'
import ErrorMessage from "./components/ErrorMessage"
import FoodItem from "./components/FoodItem"
import Container from "./components/Container"
import FoodInput from "./components/FoodInput"
import './App.css'

function App() {

    let foodItem = ["Dal","Chaval","Roti","Chas","dahi","Rice","Paneer"]
    
      let onchnageInput = (event)=>{
        console.log(event.target.value);
    }
  return (
    <>
       <Container>
       <h1 className="rounded-md bg-red-500 text-white p-3 text-center text-5xl">Food Item</h1>
       <ErrorMessage items={foodItem}></ErrorMessage>
       <FoodInput onchnageInput={onchnageInput}></FoodInput>
       <FoodItem items={foodItem}></FoodItem>
       </Container>
    </>
    
  )
}

export default App
