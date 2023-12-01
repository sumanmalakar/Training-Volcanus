import React, { useState } from "react";

import Person from "./components/Person";
// import Test from "./components/Test";
import Counter from "./components/Counter";
import Products from "./components/Products";
import Data from "./data";
import Navbar  from "./components/Navbar";

const App = () => {
 

  return (
    <>
      <div>
        <Navbar />
      <Data />
      </div>
    </>
  );
};

export default App;
