import { use, useEffect, useState } from "react";

function useDebounce(search,delay=500)
{
    const [deboundedInput,setDeboundedInput]=useState("");
    console.log("debounced called");
    
    useEffect(()=>{
        const interval = setTimeout(() => {
            setDeboundedInput(search);
            console.log("interval executed");
            
        }, delay);

        return ()=>clearInterval(interval);
    },[search,delay])
    return deboundedInput;
}
export default useDebounce;