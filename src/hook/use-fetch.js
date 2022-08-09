import React, { useState } from "react";


const useFetch = (option,successFn) => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequestFn = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        option.url,
        {
          method: option.method? option.method:"GET",
          body: taskText? JSON.stringify(taskText): null,
          headers: {
            'Content-Type': 'application/json',
          },
          auth: null,
          resource: {
            key: "lR1Zx0rUAZYoBYEsVYtcu9jYFITt0nXpqfIsyU2X"
          }
        }
      );

      if (!response.status === 200) {
        throw new Error('Request failed!');
      }
      const data = await response.json();
      successFn(data);
    } catch (err) { 
      console.log("asdasd ad sa", err.message);
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };
  return {isLoading,error,sendRequestFn};
};

export default useFetch;