import React from 'react'

const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center px-[3rem] py-[2rem] ">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blue-500">
          <strong>Job</strong>
          Search</h1>
      </div>

      <div className="menu flex gap-10 list-none font-serif cursor-pointer" >
        <li className="text-gray-400 hover:text-blue-500 ">Jobs</li>
        <li className="text-gray-400 hover:text-blue-500 ">Companies</li>
        <li className="text-gray-400 hover:text-blue-500 ">About</li>
        <li className="text-gray-400 hover:text-blue-500 ">Contact</li>
        <li className="text-gray-400 hover:text-blue-500 ">Blog</li>
        <li className="text-gray-400 hover:text-blue-500 ">Login</li>
        <li className="text-gray-400 hover:text-blue-500 ">Register</li>
      </div>
      
    </div>
  )
}

export default NavBar
