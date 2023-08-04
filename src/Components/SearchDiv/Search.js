import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'

const Search = () => {
  const [job, setJob] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const handleJob = (event) => {
    setJob(event.target.value);
  }
  const handleCompany = (event) => {
    setCompany(event.target.value);
  }
  const handleLocation = (event) => {
    setLocation(event.target.value);
  }

  const clear1 = () => {
    setJob(''); // Changed to set an empty string
  }
  const clear2 = () => {
    setCompany(''); // Changed to set an empty string
  }
  const clear3 = () => {
    setLocation(''); // Changed to set an empty string
  }

  return (
    <div className="searchDiv grid gap-10 bg-[#f1f4f8] rounded-lg p-[3rem] mx-10">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg ">
          <div className="flex gap-5 items-center">
            <AiOutlineSearch className="text-2xl cursor-pointer" />
            <input
              type="text"
              className="bg-transparent outline-none text-blue-500 w-fit font-serif text-lg"
              onChange={handleJob}
              value={job} // Set the value to reflect the state
              placeholder="Search Job Here........"
            />
            <AiOutlineCloseCircle className=" cursor-pointer text-gray-500 hover:text-black" onClick={clear1} />
          </div>

          <div className="flex gap-5 items-center">
            <BsHouseDoor className="text-2xl cursor-pointer" />
            <input
              type="text"
              className="bg-transparent outline-none text-blue-500 w-fit font-serif text-lg"
              placeholder="Search by Company......."
              onChange={handleCompany}
              value={company}
            />
            <AiOutlineCloseCircle className=" cursor-pointer text-gray-500 hover:text-black" onClick={clear2}/>
          </div>

          <div className="flex gap-5 items-center">
            <CiLocationOn className="text-2xl cursor-pointer" />
            <input
              type="text"
              className="bg-transparent outline-none text-blue-500 w-fit font-serif text-lg"
              placeholder="Search Location......"
              onChange={handleLocation}
              value={location}
            />
            <AiOutlineCloseCircle className=" cursor-pointer text-gray-500 hover:text-black" onClick={clear3}/>
          </div>

          <button className='bg-blue-800 text-white hover:bg-blue-500 px-7 py-3 rounded-xl font-semibold text-lg'>Search</button>
        </div>

      </form>

      <div className='flex items-center gap-10 justify-center '>
        <div className='singlesearch flex items-center gap-3'>
          <label htmlFor="relevance" className='text-gray-500 font-semibold'>Sort by :</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1 outline-none'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className='singlesearch flex items-center gap-3'>
          <label htmlFor="type" className='text-gray-500 font-semibold'>Sort by :</label>
          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1 outline-none'>
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className='singlesearch flex items-center gap-3'>
          <label htmlFor="level" className='text-gray-500 font-semibold'>Sort by :</label>
          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1 outline-none'>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className='text-gray-500 cursor-pointer'>Clear All</span>
      </div>
    </div>
  )
}

export default Search
