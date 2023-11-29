import React, { useState } from 'react'

const Person_Details = () => {
    const [name, setName] = useState("ram")
    const [age, setAge] = useState(40)
    const [gmail, setGmail] = useState("ram@gmail")

// const update = () =>{
//     setName("Mohan");
//     setAge(20)
//     setGmail("mohan@gmail.com")
// }

const [data, setData] = useState({
    name:'ram',
    age:23,
    gmail:"ram@gmail.com"
})

  return (
    <>
    <div>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        <h1>{data.gmail}</h1>
        <button
        onClick={()=>{
            setData({
                name:'mohan',
                age:500,
                gmail:"google@gmail.com"
            })
        }} 
        >Update</button>
    </div>
    </>
  )
}

export default Person_Details