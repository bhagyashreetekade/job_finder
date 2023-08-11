import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Jobs = (props) => {

  console.log(props)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (job) => {
      const options = {
        method: "GET",
        url: "https://jsearch.p.rapidapi.com/search",
        params: {
          query: job || "cyber",
          page: "2",
          num_pages: "1",
        },
        headers: {
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data.data);
        console.log(response.data.data); // Log the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(props.data); // Fetch data when the 'data' prop changes
  }, [props.data]);

  return (
    <div className="jobContainer flex gap-10 justify-center items-center flex-wrap py-10 ">
      {/* This will return a single job post based on the ID */}
      {data.map((job, index) => (
        <div
          key={index}
          className="group hover:cursor-pointer hover:bg-blue-800 h-72 w-60 flex flex-col p-5 text-left shadow-md shadow-gray-500 rounded-md space-y-2"
        >
          <div className="logo flex flex-row justify-between">
            <h1 className="text-lg font-semibold group-hover:text-white ">
              {job.employer_name}
            </h1>
            {job.employer_logo && (
              <img className="h-10 w-10" src={job.employer_logo} alt="" />
            )}
          </div>
          <h1 className="group-hover:text-white font-semibold text-black">
            {" "}
            {job.job_job_title}
          </h1>
          <h1 className="text-gray-400 ">
            Salary
            <br />
            <span className="text-black group-hover:text-white">
              {job.job_max_salary
                ? parseFloat(job.job_max_salary).toFixed(3)
                : "Yet to be disclosed"}
            </span>
          </h1>
          <h1 className="text-gray-400">
            Location
            <br />
            <span className="text-black group-hover:text-white">
              {job.job_city}, {job.job_country}
            </span>
          </h1>
          <div className="flex flex-grow justify-end items-end  " >
          {/* Flex-grow to push the button to the bottom */}
          <button
           
            className="rounded-lg w-fit p-2 shadow-md text-[14px] font-semibold hover:bg-white group-hover:bg-white text-center"
          >
            {/* to send the whole data we encode the data into a single string and then decode it back in the Details component: */}
            <NavLink to={`/details/${encodeURIComponent(JSON.stringify(job))}`}>View Details</NavLink>
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
