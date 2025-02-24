
const ErrorMessage = ({items }) => {
  return (
   <>
   {items.length === 0 && <p>No item found</p>}
   </>
  )
}



export default ErrorMessage