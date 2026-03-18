import { useEffect, useState } from "react";

function useFetch2()
{
    const [data,setData] =useState([]);
    const [loading,setLoading] =useState(true);
    const [error,setError] =useState(false);

   async function fetchData2()
    {   
        console.log("async function called");
        

        try{
            setLoading(true);
            setError(false);

            const res = await  fetch("https://jsonplaceholder.typicode.com/posts");
            const result= await res.json();
            setTimeout(()=>{ // simulate loading time
            setData(result);
                setLoading(false);

            },2000)
        }
        catch
        {
            setError(true); 
            setLoading(false);

        }

    }



    useEffect(()=>{
        fetchData2();
    },[])

    return {data,loading,error,fetchData2};
}

export default useFetch2;