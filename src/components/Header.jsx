import React, { useState } from "react"
import "./Header.scss"
import logo from "../assets/logo.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="header-container">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </div>
  )
}

export default Header

//Top bar of Header

const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"logo " + (menuOpen && "active")}>
      <img src={logo} alt="logo-img" />
      <div className="menuIcon">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  )
}

//Side menu Bar

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#">SHOP</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#">ABOUT US</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#">EXPERIENCES</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#">CONTRACT DISTILLERS</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#">PRODUCTS</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#">STOCKISTS</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#">BLOG</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#">BLOG</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#">PRIVACY POLICY</a>
        </li>
      </ul>
    </div>
  )
}
