import React, { useState, useRef } from "react";

const UseRefExample = () => {
  // Step 1: Create a state variable for the component
  const [count, setCount] = useState(0);

  // Step 2: Create a ref using useRef
  const countRef = useRef(0);

  // Step 3: Implement functions to interact with the counter
  const increment = () => {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
  };

  const reset = () => {
    setCount(0);
    countRef.current = 0;
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Ref Count: {countRef.current}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseRefExample;
