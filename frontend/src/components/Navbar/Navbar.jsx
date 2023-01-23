import React from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link style={{fontSize:"1.5em",marginRight:"60px",color:"#f9fffa",textDecoration:"none"}}  to=''>HEXA</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " style={{color:"black"}} aria-current="page" to=''>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='projects' style={{color:"gray"}}>Projects</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to='services' id="navbarDropdown" style={{color:"gray"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to=''>ITEM1</Link>
                  <Link to=''>ITEM2</Link>
                  <Link to=''>ITEM3</Link>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='blog' style={{color:"gray"}}>Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='contact' style={{color:"gray"}}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='add' style={{color:"gray"}}>Add</Link>
              </li>
            </ul>
            <form className="d-flex">
              <button style={{width:"100%"}} className="btn btn-outline-danger" type="submit">COLORLIB</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar