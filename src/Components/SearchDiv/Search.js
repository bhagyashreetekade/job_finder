import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import Jobs from '../JobDiv/Jobs';

const Search = () => {
  const [job, setJob] = useState('');
  const [query, setQuery] = useState('');

  //Taking the input from Job type
  const handleJob = (event) => {
    setQuery(event.target.value);
  }
  
  const clear1 = () => {
    setQuery(''); // Changed to set an empty string
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    setJob(query);
  }
  
  return (
   <div className='md:mx-10'>
     <div className="searchDiv grid md:gap-10 gap-2 justify-center items-center md:block bg-[#f1f4f8] rounded-lg p-[3rem] mx-3 lg:mx-10">
      <form action="" onSubmit={handleSubmit}>
        <div className="firstDiv flex flex-row justify-between space-x-1 items-center rounded-[8px] md:gap-[10px] bg-white p-2 shadow-lg ">
          <div className="flex md:gap-5 gap-1 items-center ">
            <AiOutlineSearch className="md:text-2xl text-base cursor-pointer" />
            <input
              type="text"
              className="bg-transparent outline-none text-blue-500 w-fit font-serif text-xs lg:text-lg"
              onChange={handleJob}
              value={query} // Set the value to reflect the state
              placeholder="Search Job Here.."
            />
            <AiOutlineCloseCircle className=" cursor-pointer text-gray-500 hover:text-black" onClick={clear1} />
          </div>

          <button className='bg-blue-800 text-white hover:bg-blue-500 px-3 py-1 md:px-7 md:py-3 rounded-xl font-semibold text-xs md:text-lg'>Search</button>
        </div>

      </form>

      
      
    </div>
    <Jobs data={job}/>
   </div>
  )
}

export default Search
