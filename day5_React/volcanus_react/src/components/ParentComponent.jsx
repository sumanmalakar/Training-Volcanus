import React, { useState, useCallback } from "react";

const ChildComponent = ({ onClick }) => {
  console.log("Child component rendering");
  return <button onClick={onClick}>Click me</button>;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the onClick function
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
