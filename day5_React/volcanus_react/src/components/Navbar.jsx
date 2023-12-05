import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="d-flex justify-content-between items-align-center bg-primary sticky-top z-1">
        <Link className='text-light p-3 text-decoration-none' to={"/"}>Home</Link>
        <Link className='text-light p-3 text-decoration-none' to={"/about"}>About</Link>
        <Link className='text-light p-3 text-decoration-none' to={"/career"}>Career</Link>
        <Link className='text-light p-3 text-decoration-none' to={"/products"}>Products</Link>
        <Link className='text-light p-3 text-decoration-none' to={"/teams"}>Teams</Link>
        <Link className='text-light p-3 text-decoration-none' to={"/contact"}>Contacts</Link>
      </div>
    </>
  );
}

export default Navbar