import {  useEffect, useRef, useState } from "react";

function useDebounce(value,delay)
{
    const [search, setSearch]= useState(value);

useEffect(()=>{
    const timer= setTimeout(()=>{
        setSearch(value);

    },delay);
    return () => clearTimeout(timer);
}, [value,delay]);


        return search;

}

export default useDebounce


