import React, { useState, useCallback } from "react";
import ChildComponet from "./ChildComponet";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [countx, setCountx] = useState(0);

  // Using useCallback to memoize the onClick function
    const handleClick = useCallback(() => {
      setCount(count + 1);
    }, [count]);

//   const handleClick = () => {
//     //   setCount(count+1);
//   };

  return (
    <div>
      <p>Count: {countx}</p>
      <ChildComponet handleClick={handleClick} />

      <div className="container">
        <button
          onClick={
            // handleClick
            () => setCountx(countx + 1)
          }
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default UseCallback;
