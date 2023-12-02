import React, { useState, useMemo } from "react";

const Test = () => {
  const [inputValue, setInputValue] = useState("");

  // Expensive calculation function
  const calculateResult = (input) => {
    // Perform some complex calculation
    console.log("Calculating result...");
    return input.length;
  };

  // Memoize the result of the calculation based on the inputValue
  const memoizedResult = useMemo(
    
    () => calculateResult(inputValue), [inputValue]
  );

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          width:'500px',
          height:'400px'
        }}
      />
      <p>Result: {memoizedResult}</p>
    </div>
  );
};

export default Test;
