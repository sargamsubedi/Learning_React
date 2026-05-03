import { useEffect, useState } from "react";

function useDebounce(search,delay=1000)
{
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(()=>{

        const timeout = setTimeout(() => {
            setDebouncedSearch(search);
        }, delay);

        return ()=>{
            clearTimeout(timeout);
        }

    },[search])

    return debouncedSearch;

}

export default useDebounce;