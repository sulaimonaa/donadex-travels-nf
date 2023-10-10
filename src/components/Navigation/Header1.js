import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import './Header1.css'
import MenuIcon from '../../assets/menu.png'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Header1 = () => {
  const [mobile, setMobile] = useState(false)
  const toggleNavList = () => {
    setMobile(true)
  }

  const closeMobile = () => {
    setMobile(false)
  }

  return (
    <>
      <header className="w-full h-16 md:h-20 bg-transparent">
        <menu className="w-full h-full">
          <nav className="flex justify-between md:justify-start items-center h-full">
            <div className="px-2 text-sky-400 text-2xl md:text-3xl font-bold">Donadex <span className='font-light'>Travels</span></div>
            <div className='md:hidden px-2'>
              <img
                src={MenuIcon}
                alt="menu icon"
                className='w-5 transition'
                onClick={toggleNavList}
              />
            </div>
            <div className={mobile ? "flex flex-col absolute w-full bg-slate-300/75 h-full top-0 gap-2 px-2" : "md:flex hidden gap-2 px-2"}>
              <AiOutlineCloseCircle onClick={closeMobile} className='absolute right-3 mt-1 md:hidden transition'/>
              <NavLink to="/" className="text-gray-900 hover:text-sky-400 md:mt-2">
                Flights
              </NavLink>
              <NavLink to="/about" className="text-gray-900 hover:text-sky-400 md:mt-2">
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
