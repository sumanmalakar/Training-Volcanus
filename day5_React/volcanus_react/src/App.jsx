import React, { useState } from "react";

import Person from "./components/Person";
// import Test from "./components/Test";
import Counter from "./components/Counter";
import Products from "./components/Products";
import Data from "./data";
import Navbar  from "./components/Navbar";
import Test from "./components/Test";
import FibonacciApp from "./components/FibonacciApp";
import ParentComponent from './components/ParentComponent'
import Use_Effect from "./components/Use_Effect";
import Fetch_Data from "./components/Fetch_Data";

const App = () => {
 

  return (
    <>
      <div>
        {/* <Navbar /> */}
      {/* <Data /> */}
      {/* <Test /> */}
      {/* <FibonacciApp /> */}

      {/* <ParentComponent /> */}

      {/* <Use_Effect /> */}

      <Fetch_Data />

      </div>
    </>
  );
};

export default App;
