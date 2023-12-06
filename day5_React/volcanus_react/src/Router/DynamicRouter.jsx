import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../product_Data';
import Navigate_Component from '../components/Navigate_Component';
const DynamicRouter = () => {
    // console.log(useParams());
    const {slug} = useParams();

    const product_Details = product.filter((data)=>data.id == slug);

    console.log(product_Details);



    // console.log(slug)
  return (
    <>
      <div className="container text-center">
        <h1>{product_Details[0].title}</h1>
        <p>{product_Details[0].description}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "30%",
              objectFit: "contain",
            }}
            src={product_Details[0].imgUrl}
            alt=""
          />
        </div>

        <div className='my-5'> 
          <Navigate_Component />
        </div>
      </div>


    </>
  );
}

export default DynamicRouter