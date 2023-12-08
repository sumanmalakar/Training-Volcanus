import React from "react";
import People from "./People";
People;
const Panchayat = ({money}) => {
  return (
    <div>
      Panchayat
      <People money={money} />
    </div>
  );
};

export default Panchayat;
