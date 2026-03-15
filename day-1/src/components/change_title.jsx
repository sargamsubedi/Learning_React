import { useEffect, useState } from "react"

 export default function TitleChanger()
{
    const[count,setCount]=useState(0);
    function UpdateCounter()
    {

        setCount(count +1);
    }
    useEffect(()=>{
        document.title= `count is ${count}`;
    },[count])
    return(
        <div>
            <button onClick={UpdateCounter}>click here to update the title</button>
        </div>
    )
}