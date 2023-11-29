import React, { useState } from "react";



const Counter = () => {

    

    const [counter, setCounter] = useState(10)

//   let counter = 0;

  const incrase = () => {
    // counter++;
    setCounter(counter+10)
    console.log(counter);
  };
  const decrease = () => {
    // counter--;
    setCounter(counter-10)
    console.log(counter);
  };
  console.log(counter);

  return (
    <div>
      {counter}
      <br />

      <button onClick={incrase}>Increase</button>

      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
