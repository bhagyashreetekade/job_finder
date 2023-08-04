import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Value = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '357b927a12msh970bd44418455dbp15a532jsnde022631e852',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData(data[0].data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mx-10 mt-7'>
      <h1 className='text-black text-[25px] py-6 font-bold block w-[550px]'>The value that holds us true and to account</h1>

      {/* Display all employer names */}
      <div>
        <h2>Employer Names:</h2>
        <ul>
         
        </ul>
      </div>
    </div>
  );
};

export default Value;
