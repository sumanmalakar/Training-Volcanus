import React from 'react'

const Person = () => {
  const person = {
    name: "ram",
    age: 23,
    gmail: "ram@gmail.com",
    phone: 79999,
  };

  const style = {
    border: "2px solid yellow",
    padding: "2rem",
    backgroundColor: "blue",
  }

  const style2 = {
    border:'5px solid blue',
    padding:'2rem',
    backgroundColor:'yellow',
    color:'black'
  }

  return (
    <>
      <div
      //   style={{
      //     border:'2px solid yellow',
      //     padding:'2rem',
      //     backgroundColor:'blue',
      //   }}
      >
        <h1
        // className='superman'
        //  style={style}
         >{person.name}</h1>
        <h2>{person.age}</h2>
        <h3 
        // style={style2}
        >{person.gmail}</h3>
      </div>
    </>
  );
}

export default Person