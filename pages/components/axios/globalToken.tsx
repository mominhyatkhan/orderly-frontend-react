import axios from 'axios';
import { useEffect } from 'react';

function MyComponent() {
  const data:any=[];
  async function fetchData() {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      response.data.map((item:any)=>{
        // console.log("this is item", item);
        
        data.push(item)
      });
      console.log(data,response)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  } else {
    console.log("returning data");
    
    return data;

  }

}

export default MyComponent;