import { useEffect, useState } from "react";
// import useFetch2 from "./useFetch2";


function Search(value,delay=500)
{
    const [filteredData,setFilteredData]=useState([]);
    const {data,loading,error,fetchData2} =useFetch2();

    const [filterData , setfilterData] =useState(false)


    function filterDataFun()
    {
       const fildata=( data.filter((item) =>
            item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        ))
        setFilteredData(fildata);
    }    
   
    useEffect(()=>{
        if(value==null) 
            {
                setfilterData(false);
                return;
            }

        const time= setTimeout(() => {
            
            filterData(true);
            filterDataFun();

        }, delay);

        return clearTimeout(time);
    },[value,delay])

if(!filterData)  return {data,loading,error,fetchData2};

    return {filteredData,loading,error,fetchData2};

}

export default Search;