import React, { useContext } from 'react'
import moneyContext from '../context/MoneyContext'

const People = () => {
  console.log(useContext(moneyContext))
  const data = useContext(moneyContext)
  return (
    <>People = {data.money}
    <div className="container">
      <h1>{data.person.name}</h1>
      <h2>{data.person.email}</h2>
      <h3>{data.person.contact}</h3>

      <h1>Counter = {data.counter}</h1>
      <button
      onClick={()=>data.setCounter(data.counter+1)}
       className="btn btn-warning">Increase</button>
    </div>
    </>
  )
}

export default People