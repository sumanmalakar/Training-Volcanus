import React, { useState } from 'react'



const TestingState = () => {

    const [counter, setCounter] = useState(0)

    // let counter = 0;

    const increase = () =>{
        // counter++;
        // setCounter("ram")
        setCounter(counter+1)
        console.log(counter)
    }
    const decrease = () => {
    //   counter--;
    // setCounter("syaam")
    setCounter(counter-1)
      console.log(counter);
    }

  return (
    <div>
        <h1>{counter}</h1>
        <button
        onClick={increase}
         >Increase</button>
        <button 
        onClick={decrease}
        >Decrease</button>
    </div>
  )
}

export default TestingState