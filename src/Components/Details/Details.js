import React from "react";
import { useParams } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
const Details = () => {
  const { jobData } = useParams();

  // Decode the job data and parse it back to an object
  const job = JSON.parse(decodeURIComponent(jobData));

  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col justify-start mx-96 w-full h-full p-6 items-start bg-[#f5f8f1] space-y-3">
     
       <h1 className="text-xl font-bold">{job.employer_name}</h1>
       
        <span>{job.job_title}</span>
        <div className="flex gap-2">
          <BiHomeAlt className="text-lg" />
          <h1 className="text-sm ">{job.job_employment_type}</h1>
        </div>
        <div className="grid gap-14 grid-cols-3">
          <h1 className="text-gray-400 text-left">
            SALARY <br />
            <span className="text-black group-hover:text-white">
              {job.job_max_salary
                ? parseFloat(job.job_max_salary).toFixed(3)
                : "Yet to be disclosed"}
            </span>
          </h1>

          <h1 className="text-gray-400 text-left">
            LOCATION
            <br />
            <span className="text-black group-hover:text-white">
              {job.job_city}
            </span>
          </h1>
          <h1 className="text-gray-400 text-left">
            REMOTE JOB
            <br />
            <span className="text-black group-hover:text-white">
              {job.job_is_remote}
            </span>
          </h1>
        </div>

        <h1 className="text-gray-400 pt-2">REQUIRED SKILLS</h1>
        <span className="text-black group-hover:text-white">
              {job.job_required_skills
                ? parseFloat(job.job_max_salary).toFixed(3)
                : "Yet to be disclosed"}
            </span>

        <h1 className="text-gray-400 pt-2">LANGUAGE</h1> 
        <span>{job.job_posting_language}</span>
        <div className="flex items-start flex-col text-justify">
          <h1 className="text-gray-400 py-2">BENEFITS </h1>
          <ul className="list-decimal ml-5">
            {job.job_highlights.Benefits.map((Benefits, index) => (
              <li key={index}>{Benefits}</li>
            ))}
          </ul>

          <h1 className="text-gray-400 py-5">
            Selected intern's day-to-day responsibilities include:
          </h1>
          <ul className="list-decimal ml-5">
            {job.job_highlights.Responsibilities.map(
              (responsibilities, index) => (
                <li key={index}>{responsibilities}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
