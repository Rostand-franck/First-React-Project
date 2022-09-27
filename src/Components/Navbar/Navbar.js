import { useState } from "react"
import { Link } from "react-router-dom"
import classes from './navbar.module.css'

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (<nav className="navbar">
    <ul className="left-nav">

      <li className={active === "home" ? classes.active : ""} onClick={() => setActive("home")}>
          <Link to="/home">Home</Link>
      </li>

      <li className={active === "product" ? classes.active : ""} onClick={() => setActive("product")}>
          <Link to="/products" >Products</Link>
      </li>

      <li className={active === "about" ? classes.active : ""} onClick={() => setActive("about")}> 
        <Link to="/about">About Us</Link>
      </li>

    </ul>

    <ul className="right-nav">
      <li><a href="/">Contact Us</a></li>
    </ul>
  </nav> );
}

export default Navbar;