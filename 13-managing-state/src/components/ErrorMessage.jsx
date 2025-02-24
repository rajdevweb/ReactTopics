
const ErrorMessage = ({items }) => {
  return (
   <>
   {items.length === 0 && <p>NO ITEM FOUND</p>}
   </>
  )
}



export default ErrorMessage