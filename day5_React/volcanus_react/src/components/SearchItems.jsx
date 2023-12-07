import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { product } from "../product_Data";

const SearchItems = () => {
  // const
  // console.log(useParams())
  const { superman } = useParams();
  const [filtereData, setFiltereData] = useState([]);

  useEffect(() => {
    const filterData = () => {
      setFiltereData(
        product.filter((data) =>
          data.title.toLowerCase().includes(superman.toLowerCase())
        )
      );
    };

    filterData();
  }, [superman]);

  console.log(filtereData);

  return (
    <>
      <div className="container my-5">
        {filtereData.map((data) => {
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

export default SearchItems;
