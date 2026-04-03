import { useEffect, useState } from "react";
import { getPosts } from "../api/postApi";

function usePosts(search,page)
{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

async function getData()
{
    setLoading(true);
    setError(false);
    try{
        const res = await getPosts(search,page);
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
    setData([]); // reset data
},[search])

useEffect(()=>{
    getData();
},[search,page])

return {loading, error , data};
}

export default usePosts;