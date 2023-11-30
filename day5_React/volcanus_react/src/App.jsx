import React, { useState } from "react";

import Person from "./components/Person";
// import Test from "./components/Test";
import Counter from "./components/Counter";
import Products from "./components/Products";

const App = () => {
 const product = [
   {
     id: 1,
     title: "Apple iPhone 15 (128 GB) - Blue",
     description:
       "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else.",
     price: 79900,
     imgUrl: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg",
     category: "mobiles",
   },
   {
     id: 2,
     title: "2&CO Pixel 7a 5G",
     description:
       "Pixal 7a is fast and efficient, with 8 GB of RAM, an amazing camera, and features rated highest in security",
     price: 40990,
     imgUrl:
       "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/b/d/-original-imagpgx48f4szdvf.jpeg?q=70",
     category: "mobiles",
   },
   {
     id: 3,
     title: "Apple Watch Series 7",
     description:
       "Apple Watch Series 7 (GPS + Cellular, 41mm) - Gold Stainless Steel Case with Abyss Blue Sport Band - Regular",
     price: 54967,
     imgUrl: "https://m.media-amazon.com/images/I/71YL6rnDToL._SL1500_.jpg",
     category: "smartwatch",
   },

   {
     id: 4,
     title: "boAt Xtend Smart Watch",
     description:
       "boAt Xtend Smart Watch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Pitch Black)",
     price: 1699,
     imgUrl: "https://m.media-amazon.com/images/I/61IMRs+o0iL._SL1500_.jpg",
     category: "smartwatch",
   },
   {
     id: 6,
     title: "Dell 15 Vostro 3520 Laptop",
     description:
       "Dell 15 Vostro 3520 Laptop, Intel Core i3-1115G4 Processor/8GB DDR4/512GB SSD/Intel UHD Graphics/15.6 (39.6cm) FHD 120Hz Refresh Rate 250 nits/Thin & Light 1.66kg/Win 11+MSO'21/15 Month McAfee/Black",
     price: 36990,
     imgUrl: "https://m.media-amazon.com/images/I/51r-PhkZodL._SL1080_.jpg",
     category: "Laptops",
   },
   {
     id: 7,
     title: "Lenovo Yoga 7 Intel Evo i7 1260P 14",
     description:
       "Lenovo Yoga 7 Intel Evo i7 1260P 14 (35.56cm) QHD OLED 2-in-1 400Nits Laptop(16GB/512GB SSD/Win 11/Office 2021/Backlit KB/Digital Pen/3Yr Warranty/Alexa/3 month Game Pass/Storm Grey/1.42Kg) 82QE0060IN",
     price: 104990,
     imgUrl: "https://m.media-amazon.com/images/I/61be2Ft6g3L._SL1080_.jpg",
     category: "Laptops",
   },
   {
     id: 8,
     title: "Apple 2022 iPad Air M1 Chip",
     description:
       "Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Blue (5th Generation)",
     price: 51967,
     imgUrl: "https://m.media-amazon.com/images/I/71VbHaAqbML._SL1500_.jpg",
     category: "tablets",
   },
   {
     id: 9,
     title: "Lenovo Tab P11 (2nd Gen)",
     description:
       "Lenovo Tab P11 (2nd Gen)| 11.5 Inch| 6 GB, 128 GB Expandable| Wi-Fi + LTE| 120 Hz, 2K Display(2000x1200)|Quad Speakers with Dolby Atmos|Octa-Core Processor |13 MP Front Camera (Storm Grey, ZABG0285IN)",
     price: 20967,
     imgUrl: "https://m.media-amazon.com/images/I/517Rd6DfZRL._SL1080_.jpg",
     category: "tablets",
   },
 ];

  return (
    <>
      <div>
       <Products product={product} />
      </div>
    </>
  );
};

export default App;
