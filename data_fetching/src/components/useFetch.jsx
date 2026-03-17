import { useEffect, useState } from "react";


function  useFetchData(){

    const [data,setData]= useState([]);
    const [loading ,setLoading] =useState(true);
    const [error ,setError] =useState(false);

    

function fetch_data()
{       
        console.log("fetch data called");
        setLoading(true);

    setTimeout(() => { // to simulate fetching taking time 
        

      
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
             return res.json();
        }).then(value=>{
            setData(value);
            setLoading(false);
        }).catch(()=>{
            setError(true);
            setLoading(false);
        })

          
    }, 3000);

}

   useEffect(()=>{
        fetch_data();
    },[])
    return {data,loading,error,fetch_data} ;
}

export default useFetchData;