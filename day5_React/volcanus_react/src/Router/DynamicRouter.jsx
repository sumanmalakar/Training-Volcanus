import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicRouter = () => {
    // console.log(useParams());
    const {slug} = useParams();
  return (
    <div>DynamicRouter = {slug}</div>
  )
}

export default DynamicRouter