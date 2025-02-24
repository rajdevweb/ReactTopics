
import Item from './Items'

const FoodItem = ({items}) => {
  return (
  <ul className='list-group  rounded-xl bg-fuchsia-100 flex justify-center flex-col gap-5'>
        {items.map((item)=>(
         <Item key={item} foodItem={item} item={item} handleBuyButton={()=>{console.log(`${item} being`)}}></Item>
        ))}
      </ul>
  )
}

export default FoodItem