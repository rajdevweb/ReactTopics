import react from 'react'
import ErrorMessage from "./components/ErrorMessage"
import FoodItem from "./components/FoodItem"
import Container from "./components/Container"
import FoodInput from "./components/FoodInput"
import './App.css'
import { useState } from 'react'
function App() {


      // let foodItem = ["Dal","Chaval","Roti","Chas","dahi","Rice","Paneer"];
      // let textToshow = "Food item intere by user";
    //   let [textToshow, setTextToshow] = useState("Food item intere by user");
    //   console.log(textToshow);
      
    //   let onchnageInput = (event)=>{
    //     console.log(event.target.value);
    //     setTextToshow(event.target.value);
    // }
    let [foodItem, setFoodItem] = useState([])
    
    let onKeyDown= (event)=>{
      if(event.key === "Enter"){
        let newInput = event.target.value
        event.target.value = ""
        setFoodItem(newInput)
        setFoodItem([...foodItem, newInput])
      }
    }
  return (
    <>
       <Container>
       <h1 className="rounded-md bg-red-500 text-white p-3 text-center text-5xl">Food Item</h1>
       <h1>nice super</h1>
       <ErrorMessage items={foodItem}></ErrorMessage>
       <FoodInput  handleKeyDown={onKeyDown}></FoodInput>
       <p>{foodItem}</p>
       <FoodItem items={foodItem}></FoodItem>
       </Container>
    </>
  )
}

export default App
