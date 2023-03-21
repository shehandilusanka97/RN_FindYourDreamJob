import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": 'caa542f014msh72c486369bfca9dp16e2dejsn8ed12f6fb983' ,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };
  const fetchData= async()=>{
    setIsLoading(true);
    try {
       const response = await axios.request(options);
       setData(response.data.data);
       setIsLoading(false);
    }catch(error){
       setError(error)
       alert('There is an error, please try again later')
    }finally{
        setIsLoading(false);
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);

  const refetch=()=>{
    setIsLoading(true);
    fetchData();
  }
  return{data,isLoading,error,refetch};
};
export default useFetch;