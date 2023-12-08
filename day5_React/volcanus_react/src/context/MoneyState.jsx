import React, { useState } from "react";
import MoneyContext from "./MoneyContext";

const MoneyState = (props) => {
  const money = 1000;
  const [person, setPerson] = useState({
    name: "Ram Sharma",
    email: "ram@gmail.com",
    contact: 79999,
  });
  const [counter, setCounter] = useState(0);
  return (
    <MoneyContext.Provider
      value={{
        money,
        person,
        counter,
        setCounter,
      }}
    >
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyState;
