import { useEffect, useState } from "react";

function useFetchAndAbort(input,reload) {
  const [data,setData] =useState([]);
  const [error,setError] =useState(false);


  useEffect(() => {
    
    const controller = new AbortController();
    
    async function fetchData(){
      
      try {
        setError(false);
        await new Promise(res => setTimeout(res, 2000)); // simulation of delay

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${input}`,
          { signal: controller.signal }
        );

        const data = await res.json();
        setData(data);

      } catch (err) {
        if (err.name === "AbortError") {
          console.log(" request aborted");
        } else {
          console.log("error occurs");
          setError(true);
        }
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [input,reload]);


  return {data,error}

}

export default useFetchAndAbort;