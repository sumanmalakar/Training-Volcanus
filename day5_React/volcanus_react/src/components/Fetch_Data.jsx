import React, { useEffect, useState } from "react";

const Fetch_Data = () => {
    const [apiData, setApiData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        // const api = await fetch(
        //   "https://www.themealdb.com/api/json/v1/1/randomselection.php"
        // );
      const api = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await api.json();

    //   console.log(data.meals);
      console.log(data);
      setApiData(data);
    };
    fetchData();
  }, []);
//   console.log("data in state",apiData)
  return <div>
    {apiData.map((data)=>{
        return(
        <><div className="container text-center bg-primary my-5">
        <h1>{data.userId}</h1>
        <h1>{data.title}</h1>
        <h1>{data.name}</h1>
        <h2>{data.email}</h2>
        </div>
        </>
        )
    })}
  </div>;
};

export default Fetch_Data;
