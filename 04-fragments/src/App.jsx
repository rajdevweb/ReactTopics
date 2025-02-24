import React from 'react'
React

const App = () => {
  let healthyFood = ["Dal","Chaval","Roti","Chas","dahi"]
  return (
    <>
    {/* fragment are part(hissa) */}
    {/* map are converstion */}
 
<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Top students:</h2>
<ol className="max-w-md space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
    
    {healthyFood.map((item)=>(
      <li key={item} className='font-medium'>{item}</li>
    ))}

</ol>



    </>
  )
}

export default App