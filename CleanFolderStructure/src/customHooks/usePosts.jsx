import { useEffect, useState } from "react";
import { getPosts } from "../api/postApi";

function usePosts(search,page)
{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isMoreDataAvailable, setIsMoreDataAvailable] =useState(true);

async function getData()
{
    setLoading(true);
    setError(false);
    try{
        const res = await getPosts(search,page);
        if(res.length===0)
            setIsMoreDataAvailable(false);
        console.log(isMoreDataAvailable);
        
        setData(prev=> [...prev ,...res])
        
    }
    catch(err)
    {
        setError(true);
    }
    finally{
        setLoading(false);
    }
}

useEffect(()=>{
    setIsMoreDataAvailable(true);
    setData([]); // reset data
},[search])

useEffect(()=>{
    getData();
},[search,page])

return {loading, error , data, isMoreDataAvailable};
}

export default usePosts;