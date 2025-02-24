import ErrorMessage from "./components/ErrorMessage"
import FoodItem from "./components/FoodItem"
import Container from "./components/Container"
import FoodInput from "./components/FoodInput"

const App = () => {

    let foodItem = ["Dal","Chaval","Roti","Chas","dahi","Rice","Paneer"]
  return (
    <>
    <Container>
       <h1 className="rounded-md bg-red-500 text-white p-3 text-center text-5xl">Food Item</h1>
       <ErrorMessage items={foodItem}></ErrorMessage>
       <FoodInput></FoodInput>
       <FoodItem items={foodItem}></FoodItem>
       </Container>
    </>
  )
  
}

export default App