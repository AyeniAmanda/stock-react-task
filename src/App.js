import axios from 'axios';
import React, { useState, useEffect } from 'react'; // Correct import statement

import Product from './components/Product';

const App = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // useEffect hook to fetch data when component mounts
    const getCustomersData = async () => {
      const BASE_URL = 'http://localhost:8080/api/stocks';
      try {
        const response = await axios.get(BASE_URL, {
          headers: {
            'Access-Control-Allow-Origin': '*' // Set the appropriate origin
            // Add any other CORS headers as needed
          }
        });
        setDatas(response.data); // Set data from response.data
      } catch (e) {
        console.log(e.response);
      }
    };

    getCustomersData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  console.log(datas); // This will log the data fetched from the API

  return (
    <div>
      <h1 className="title">STOCK Store</h1>
      <Product datas={datas} />
    </div>
  );
};

export default App;
