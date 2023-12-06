import React, { useState } from "react";
import { product } from "../product_Data";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(product);

  const filterMethod = (category) =>{
    setProducts(product.filter((data) => data.category == category));
  }


  return (
    <>
      <div className="container d-flex justify-content-center sticky-top bg-light">
        <button
          onClick={() =>setProducts(product)}
          className="btn btn-info mx-3"
        >
          No_Filter
        </button>
        <button
          onClick={() => filterMethod("mobiles")}
          className="btn btn-primary mx-3"
        >
          Mobiles
        </button>
        <button
          onClick={() => filterMethod("Laptops")}
          className="btn btn-warning mx-3"
        >
          Laptops
        </button>
        <button
          onClick={() => filterMethod("smartwatch")}
          className="btn btn-danger mx-3"
        >
          SmartWatches
        </button>
        <button
          onClick={() => filterMethod("tablets")}
          className="btn btn-secondary mx-3"
        >
          Tablets
        </button>
      </div>

      <div className="container my-5">
        {products.map((data) => {
          return (
            <>
              <div className="text-center my-3">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <Link
                  to={`/products/${data.id}`}
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
                    src={data.imgUrl}
                    alt="img"
                  />
                </Link>
                <button className="btn btn-warning">{data.price} ₹</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
