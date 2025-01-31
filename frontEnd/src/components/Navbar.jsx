import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
   <div className="navbar  container fixed top-0 left-0 right-0 z-50 bg-white border-b py-4 mb-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg">
         <li><NavLink to='home'>HOME</NavLink></li>
        <li><NavLink to='about'>ABOUT US</NavLink></li>
        <li><NavLink to='service'>SERVICES</NavLink></li>
        <li><NavLink to='team'>TEAM</NavLink></li>
        <li><NavLink to='expertise'>OUR EXPERTISE</NavLink></li>
        <li><NavLink to='reservation'>RESERVATION</NavLink></li>
      </ul>
    </div>
  <Link to='/'>  <a className=" text-4xl text-black font-normal">Dreamcatcher</a></Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg space-x-5">
    <li>
            <NavLink
              to="/"
              className={({ isActive }) => 
                isActive ? ' border-b-2 text-black border-black' : 'hover:text-[#2563eb] text-[#4a5568] bg-white'
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                isActive ? ' border-b-2 text-black border-black' : 'hover:text-[#2563eb] text-[#4a5568] bg-white'
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) => 
                isActive ? ' border-b-2 text-black border-black' : 'hover:text-[#2563eb] text-[#4a5568] bg-white'
              }
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) => 
                isActive ? ' border-b-2 text-black border-black' : 'hover:text-[#2563eb] text-[#4a5568] bg-white'
              }
            >
              TEAM
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/expertise"
              className={({ isActive }) => 
                isActive ? ' border-b-2 text-black border-black' : 'hover:text-[#2563eb] text-[#4a5568] bg-white'
              }
            >
              OUR EXPERTISE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservation"
              className={({ isActive }) => 
                isActive ? ' border-b-2 text-black border-black' : 'hover:text-[#2563eb] text-[#4a5568] bg-white'
              }
            >
              RESERVATION
            </NavLink>
          </li>
       
    </ul>
  </div>
  <div className="navbar-end space-x-4">
  <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
    <Link to='menu' className="btn rounded-3xl bg-white text-black hover:bg-black hover:text-white duration-500">OUR MENU</Link>
  </div>
</div>
    
    </>
  )
}

export default Navbar