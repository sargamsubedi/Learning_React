import { use, useEffect, useState } from "react";

function useDebounce(search,delay=500)
{
    const [debouncedInput,setDebouncedInput]=useState("");
    console.log("debounced called");
    
    useEffect(()=>{
        const interval = setTimeout(() => {
            setDebouncedInput(search);
            console.log("interval executed");
            
        }, delay);

        return ()=>clearInterval(interval);
    },[search,delay])
    return debouncedInput;
}
export default useDebounce;