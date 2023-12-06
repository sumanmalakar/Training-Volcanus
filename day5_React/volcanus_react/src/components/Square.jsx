import React from "react";
const Square = (props) => {
  const squareStyle = {
    backgroundColor: props.isWinningSquare ? "yellow" : "white",
    animation: props.isWinningSquare ? "blink 1s infinite" : "none",
    // Add any additional styles you need
    border: "1px solid #ccc",
    // ... other styles
  };
  return (
    <div className="square" onClick={props.onClick} style={squareStyle}>
      <h4>{props.value}</h4>
    </div>
  );
};
export default Square;
