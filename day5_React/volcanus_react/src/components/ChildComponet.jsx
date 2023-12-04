import React, { useEffect } from 'react'

const ChildComponet = ({ handleClick }) => {
    useEffect(() => {
     console.log("UseEffect is Running")
    }, [handleClick])
    
  return <div>

    ChildComponet

   
    </div>;
};

export default ChildComponet