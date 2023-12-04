import React, { useState, useLayoutEffect,useRef } from "react";

const Use_Effect = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

    const myElementRef = useRef(null);

    useLayoutEffect(() => {
      const rect = myElementRef.current.getBoundingClientRect();
      console.log("Element dimensions:", rect.width, rect.height);
      // Perform some action based on the measurements
    }, []);

  return (
    <div>
      <p>This is a dynamic style component</p>
      {/* <button onClick={() => setBackgroundColor("blue")}>Change Color</button> */}
      <div ref={myElementRef}>This element will be measured</div>
    </div>
  );
};

export default Use_Effect;