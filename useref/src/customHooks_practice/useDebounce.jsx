import { useDebugValue, useRef } from "react";

function useDebounce(value)
{
    const searchRef= useRef(value);


    return searchRef.current;

}

export default useDebounce


