import React, { useState } from "react";

import Person from "./components/Person";
// import Test from "./components/Test";
import Counter from "./components/Counter";
import Person_Details
 from "./components/Person_Details";
 import UseRefExample from "./components/UseRefExample";
const App = () => {
  return (
    <>
      <div>
        {/* <Person name={"name"} age={23} gmail={"ram@gmail.com"} 
        father={"saktimaan"}
        
        />
        <Person name={"mohan"} age={25} gmail={"mohan@gmail.com"} />

        <Person name={"syaam"} age={30} gmail={"Syaam@gmail.com"} /> */}

        {/* <Counter /> */}
        {/* <Person_Details /> */}

        <UseRefExample />
       
        {/* <Test /> */}
      </div>
    </>
  );
};

export default App;
