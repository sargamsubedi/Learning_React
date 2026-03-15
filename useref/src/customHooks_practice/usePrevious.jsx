import { useEffect, useRef } from "react";

function usePrevious(count)
{
 const previousRef=useRef(undefined);
 useEffect(()=>{

    previousRef.current=count;

 },[count])
 return previousRef.current;

}

export default usePrevious;