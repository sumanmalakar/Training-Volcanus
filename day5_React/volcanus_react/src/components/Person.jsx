import React from "react";

const Person = ({name, age, gmail,father}) => {
  
  // console.log(props)

  return (
    <>
      <div className="superman">
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{gmail}</h3>
        <h3>{father}</h3>
      </div>
    </>
  );
};

export default Person;
