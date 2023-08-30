import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jobsearch4.p.rapidapi.com/api/v2/Jobs/${endpoint}`,
    params: {
     ...query
    },
    headers: {
      'X-RapidAPI-Key': '76ec22ba7cmsh5f4d7294c947a75p198d7bjsn8345a4148966',
      'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null)
    try {
        const response = await axios.request(options);
        setData(response.data)
        setIsLoading(false)
    } catch (error){
        setError(error)
        alert('there is an error')
    } finally {
        setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return {data, isLoading, error, refetch}
}

export default useFetch;