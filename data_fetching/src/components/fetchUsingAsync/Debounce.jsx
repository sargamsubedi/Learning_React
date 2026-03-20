import { useEffect, useState } from "react";

function useDebounce(value,delay=500)
{
    const [debouncedvalue, setDebouncedvalue]=useState(value);


    useEffect(()=>{
        const time= setTimeout(() => {

            setDebouncedvalue(value);

        }, delay);

        return ()=>clearTimeout(time);
    },[value,delay])

    return debouncedvalue;

}

export default useDebounce;