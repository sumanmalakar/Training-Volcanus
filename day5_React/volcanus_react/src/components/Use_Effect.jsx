import React, { useState } from "react";
import { useEffect } from "react";

const Use_Effect = () => {
  const [counter, setCounter] = useState(0);

  
  useEffect(() => {
    console.log("UseEffect is Running");
    document.title = `sideEffect ${counter}`
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-primary"
      >
        Increase
      </button>
    </div>
  );
};

export default Use_Effect;
