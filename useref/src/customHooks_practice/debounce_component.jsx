import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function Search()
{
    const[input,setInput]=useState("gam");

    const value = useDebounce(input);

    // useEffect(()=>{
    //     console.log(value);
    // },[value])

    return(

        <div>
            <h1>
                {value}
                {/* {input} */}
                </h1>
                <input type="text" id="test" onChange={(e)=>setInput(e.target.value)}/>
        </div>
    )

}
export default Search