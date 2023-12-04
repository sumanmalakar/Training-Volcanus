import React, { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (value) =>{
        setName(value)
  }
  return (
    <>
      <div className="container  my-5 text-center d-flex justify-content-center items-center ">
        {/* <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Well never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form> */}
        Name:-{" "}
        <input
          value={name}
          onChange={(e) =>handleChange(e.target.value)}
          type="text"
        />
        Gmail:-{" "}
        <input
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
          type="gmail"
        />
        Password:-{" "}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button className="btn btn-primary mx-3">Submit</button>
      </div>
      <h1 className="text-center">{name}</h1>
      <h1 className="text-center">{gmail}</h1>
      <h1 className="text-center">{password}</h1>
    </>
  );
};

export default FormHandling;
