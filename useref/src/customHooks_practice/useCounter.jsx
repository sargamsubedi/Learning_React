import { useState } from "react";

function useCounter(value)
{

    const[count,setCount]= useState(value);

    function increment(){
        setCount(prev=> prev+1);
    }
    function decrement(){
        setCount(prev=> prev-1);
    }
    function reset(){
        setCount(value);
    }

    return [count,increment,decrement,reset];
}

export default useCounter;