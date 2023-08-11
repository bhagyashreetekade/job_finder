import React from "react";
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer p-[5rem] text-left mb-4 xl:mx-20 bg-blue-800 xl:rounded-[10px] grid md:grid-cols-2 lg:grid-cols-3 md:gap-7 xl:grid-cols-5 xl:gap-3 space-y-4 xl:space-y-0  w-full xl:w-auto items-center justify-center">
      <div>
        <div className="logoDiv pb-4">
          <h1 className="logo text-[25px] text-white">
            <strong>Job</strong>
            Search
          </h1>
        </div>
        <p className="text-white opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates
        </p>
      </div>

      <div className="grid gap-3">
        <span className="font-semibold pb-[1.5rem] text-[18px]">Company</span>
        <div className="grid gap-3 list-none ">
          <li className="text-white hover:opacity-[1] opacity-[.7] ">
            About Us
          </li>
          <li className="text-white hover:opacity-[1] opacity-[.7] ">
            Features
          </li>
          <li className="text-white hover:opacity-[1] opacity-[.7] ">News</li>
          <li className="text-white hover:opacity-[1] opacity-[.7] ">FAQ</li>
        </div>
      </div>
      <div className="grid gap-3">
        <span className="font-semibold pb-[1.5rem] text-[18px]">Resources</span>
        <div className="grid gap-3 list-none ">
          <li className="text-white hover:opacity-[1] opacity-[.7] ">
            Account
          </li>
          <li className="text-white hover:opacity-[1] opacity-[.7] ">
            Support Center
          </li>
          <li className="text-white hover:opacity-[1] opacity-[.7] ">Feedback</li>
          <li className="text-white hover:opacity-[1] opacity-[.7] ">Contact Us</li>
        </div>
      </div>
      <div className="grid gap-3">
        <span className="font-semibold pb-[1.5rem] text-[18px]">Support</span>
        <div className="grid gap-3 list-none ">
          <li className="text-white hover:opacity-[1] opacity-[.7] ">
            Events
          </li>
          <li className="text-white hover:opacity-[1] opacity-[.7] ">
            Promo
          </li>
          <li className="text-white hover:opacity-[1] opacity-[.7] ">Req Demo</li>
          <li className="text-white hover:opacity-[1] opacity-[.7] ">Careers</li>
        </div>
      </div>
      <div className='grid gap-3'>
        <span className='font-semibold pb-[1.5rem] text-[18px]'>Contact Info</span>
        <div className="text-[14px] text-white" >
        <small>teb016335@gmail.com</small>
        <div className="icons flex gap-4 py-[1rem] ">
          <AiFillInstagram className="h-[35px] w-[35px] p-[8px] rounded-full text-blue-700 bg-white"/>
          <BsFacebook className="h-[35px] w-[35px] rounded-full text-blue-700 p-[8px] bg-white"/>
          <AiFillTwitterCircle className="h-[35px] w-[35px] rounded-full text-blue-700 p-[8px] bg-white"/>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Footer;
