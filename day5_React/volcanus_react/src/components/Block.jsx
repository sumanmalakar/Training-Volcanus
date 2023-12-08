import React from 'react'
import Panchayat from './Panchayat'

const Block = ({money}) => {
  return (
    <div>
      Block
      <Panchayat money={money} />
    </div>
  );
}

export default Block