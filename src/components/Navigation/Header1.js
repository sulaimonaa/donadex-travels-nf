import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header1.css'
import MenuIcon from '../../assets/menu.png'

const Header1 = () => {
  const toggleNavList = () => {
    const navMenu = document.querySelector('.navLink')
    navMenu.classList.toggle('show')
    const toggleBtn = document.querySelector('.toggler')
    toggleBtn.classList.toggle('hide')
  }
  return (
    <>
      <header className="container-fluid">
        <menu className="menu container">
          <nav className="navbar">
            <div className="brand">Donadex Travels</div>
            <div className="toggler">
              <img
                src={MenuIcon}
                alt="menu icon"
                className="menuIcon"
                onClick={toggleNavList}
              />
            </div>
            <div className="navLink">
              <NavLink to="/" className="navItems">
                Home
              </NavLink>
              <NavLink to="/about" className="navItems">
                About
              </NavLink>
            </div>
          </nav>
        </menu>
      </header>
    </>
  )
}

export default Header1
