import React from "react";
React;
import Turnary_operator from "./Turnary_operator";
import Logical_operator from "./Logical_operator";


const App = () => {
  // let healthyFood = ["Dal", "Chaval", "Roti", "Chas", "dahi"];

  // if(healthyFood.length === 0){
  //   return <h1>I am still hungary yet</h1>
  // }else{
  // //  return <h1>i am also full</h1>
  // }
  return (
    <>
      {/* method */}
      {/* if-else
         ternary
         logical operators
     */}

      {/* <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Top students:
      </h2>
      <ol className="max-w-md space-y-1 text-black-500 list-decimal list-inside dark:text-black-400">
        {healthyFood.map((item) => (
          <li key={item} className="font-medium">
            {item}
          </li>
        ))}
      </ol> */}

      <Turnary_operator/>
      <Logical_operator/>
    </>
  );
};

export default App;
