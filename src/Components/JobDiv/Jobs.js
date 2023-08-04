import React from 'react'

//Imported Icons =================>
import {BiTimeFive} from 'react-icons/bi'

//Imported Images =================>
import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
//For all the jos, we are going to use high order array method called Map...
//In this case we shall list all the jobs into an array called Data...


const Data =[
  {
    id:1,
    image:logo1,
    title:'Web Developer ',
    time: 'Now',
    location: 'Canada',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ducimus.',
    company: 'Huawei Co.'

  },
  {
    id:2,
    image:logo2,
    title:'UI/UX Developer ',
    time: 'Now',
    location: 'India',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ducimus.',
    company: 'Amazon Co.'

  },
  {
    id:3,
    image:logo3,
    title:'IOT Developer ',
    time: 'Now',
    location: 'India',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ducimus.',
    company: 'Nmedia Co.'

  }
]

//This is single company, lets see how to map it...
const Jobs = () => {
  return (
    <div className='jobContainer flex gap-10 justify-center items-center flex-wrap py-10'>
      {
        Data.map(({id,image,title,time,location,desc,company})=>{
          return (

            //This will return a single job post based on the ID
            <div key={id} className="group group/item singleJob text-left bg-white p-[20px] rounded-[10px] hover:bg-blue-700 shadow-lg shadow-gray-500 w-[250px] hover:shadow-xl ">
              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-lg text-gray-700 font-semibold group-hover:text-white cursor-pointer'>{title}</h1>
                <span className='flex gap-1 items-center text-gray-300'>
                  <BiTimeFive className='cursor-pointer '/>{time}
                </span>
              </span>

              <h6 className='text-gray-300'>{location}</h6>
              <p className='text-sm text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>

              <div className='company flex items-center gap-3 mt-3' >
                <img src={image} className='h-7' alt="" />
                <span className='text-[14px] py-[1rem block group-hover:text-white font-semibold'>{company}</span>
              </div>

              <button className='border-[2px] rounded-[10px] mt-3 p-[10px] w-full text-[14px] font-semibold hover:bg-white text-bl group-hover:bg-white'>
                Apply Now
              </button>

            </div>
          )
        })
      }
    </div>

  )
}

export default Jobs
 