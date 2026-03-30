import { useEffect, useState } from "react";

function useFetchAndAbort(input,reload) {
  const [data,setData] =useState([]);
  const [error,setError] =useState(false);
  const [loading,setLoading] = useState(true);


  useEffect(() => {
    
    const controller = new AbortController();
    
    async function fetchData(){
      
      try {
        setError(false);
        setLoading(true)
        const url = input? `https://jsonplaceholder.typicode.com/posts?q=${input}` : `https://jsonplaceholder.typicode.com/posts`
        const res = await fetch(url,
          { signal: controller.signal }
        );

        const data = await res.json();
        setData(data);
        setLoading(false);

      } catch (err) {
        if (err.name === "AbortError") {
          console.log(" request aborted");
        } else {
          console.log("error occurs");
          setError(true);
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [input,reload]);


  return {data,error,loading}

}

export default useFetchAndAbort;