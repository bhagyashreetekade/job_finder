import axios from 'axios';

const fetchData = async (job) => {
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query: job, // Use the passed job parameter for the query
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
    console.log(response)
   // return response.data.data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData