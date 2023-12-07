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
import UseCallback from "./components/UseCallback";
import FormHandling from "./components/FormHandling";

import Multiple_Input_Handling from "./components/Multiple_Input_Handling";

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import Home from './Router/Home'
import About from './Router/About'
import Career from './Router/Career'
import Teams from './Router/Teams'
import Contact from './Router/Contact'
import DynamicRouter from "./Router/DynamicRouter";
import Board from "./components/Board"
import SearchItems from "./components/SearchItems";

import R_NavBar from "./components/R_Navbar";

const App = () => {
 

  return (
    <>
      <Router>
        <Navbar />
{/* <Board /> */}
{/* <R_NavBar /> */}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/career"} element={<Career />} />
          <Route path={"/teams"} element={<Teams />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/products"} element={<Data />} />
          <Route path={"/products/:slug"} element={<DynamicRouter />} />
          <Route path={"/products/search/:superman"} element={<SearchItems />} />

          {/* <div> */}
          {/* <Navbar /> */}
          {/* <Data /> */}
          {/* <Test /> */}
          {/* <FibonacciApp /> */}

          {/* <ParentComponent /> */}

          {/* <Use_Effect /> */}

          {/* <Fetch_Data /> */}
          {/* <UseCallback /> */}
          {/* <FormHandling /> */}
          {/* <Multiple_Input_Handling /> */}
          {/* </div> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
