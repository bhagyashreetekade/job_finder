import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';

const NavBar = () => {
  const [open, setOpen] = useState(false); // State for menu open/closed

  return (
    <div className="navBar flex justify-between items-center px-[3rem] py-[2rem] ">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blue-500">
          <strong>Job</strong> Search
        </h1>
      </div>

      {/* Responsive menu */}
      <div
        className={`menu  flex xl:gap-10 gap-7 list-none font-serif cursor-pointer ${
          open ? 'block flex-col bg-opacity-80 text-black h-full bg-gray-900 absolute z-10 right-0 top-0 p-10 w-full' : 'hidden md:flex'
        }`}
      >
        <li className="text-gray-400 hover:text-blue-500">Jobs</li>
        <li className="text-gray-400 hover:text-blue-500">Companies</li>
        <li className="text-gray-400 hover:text-blue-500">About</li>
        <li className="text-gray-400 hover:text-blue-500">Contact</li>
        <li className="text-gray-400 hover:text-blue-500">Blog</li>
        <li className="text-gray-400 hover:text-blue-500">Login</li>
        <li className="text-gray-400 hover:text-blue-500">Register</li>
      </div>

      {/* Responsive menu icons */}
      <div className="flex items-center space-x-2 md:hidden">
        <HiOutlineMenuAlt1
          className={`text-3xl cursor-pointer ${open ? 'hidden' : 'block z-40'}`}
          onClick={() => setOpen(!open)}
        />
        <GrClose
          className={`text-3xl cursor-pointer ${open ? 'block z-40' : 'hidden'}`}
          onClick={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default NavBar;
