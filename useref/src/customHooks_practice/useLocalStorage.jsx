import { useRef } from "react";

function useLocalStorage(initialValue='sargam')

{
    const nameRef =useRef(initialValue);
  

    function setName(value)
    {
        nameRef.current=value
    }
    return [nameRef,setName];

}

export default useLocalStorage;