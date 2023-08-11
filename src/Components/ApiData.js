import axios from 'axios';
import { useState } from 'react';

const ApiData = (props) => {
  const [data, setData] = useState([]); // Initialize state with an empty array

  const fetchData = async (job) => {
    const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {
        query: job,
        page: '2',
        num_pages: '1'
      },
      headers: {
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
      }
    };

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      console.log(data); // Return the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  fetchData(props)

  return (
    <div>
      {/* Use the fetchData function and pass it down to the Jobs component */}
      {/* <Jobs  data={data} /> */}
    </div>
  );
};

export default ApiData;
