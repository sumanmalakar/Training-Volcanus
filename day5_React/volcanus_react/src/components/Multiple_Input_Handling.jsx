import React, { useState } from "react";

const Multiple_Input_Handling = () => {
  const style = {
    margin: "2rem",
  };

  const [formData, setFormData] = useState({
    name: "",
    gmail: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    alert("You're form has been submited!")
    setFormData({
      name: "",
      gmail: "",
      password: "",
    });

  } 

  return (
    <form onSubmit={submitHandler}>
      name :-{" "}
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        style={style}
        type="text"
      />
      <br />
      {formData.name}
      <br />
      gmail :-{" "}
      <input
        name="gmail"
        value={formData.gmail}
        onChange={handleChange}
        style={style}
        type="text"
      />
      <br />
      {formData.gmail}
      <br />
      password :-{" "}
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        style={style}
        type="password"
      />
      <br />
      {formData.password}

      {/* <input type="submit" /> */}
      <button className="btn btn-warning">submit</button>
    </form>
  );
};

export default Multiple_Input_Handling;
