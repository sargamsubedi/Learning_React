import { useEffect, useState } from "react";
import useDebounce from "./Debounce";
import useFetch2 from "./useFetch2";




function Display2()
{

      const {data,loading,error,fetchData2} =useFetch2();
      const [input,setInput] = useState("");
      const debouncevalue = useDebounce(input, 500)

          const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(debouncevalue.toLowerCase())
  );



    if(error)  return(
    <div>
    <button onClick={fetchData2}>Reload</button>
  <p>Can't fetch data , an error occurred  </p>
    </div>

)

    return(
        <div>
          <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>

            <button onClick={fetchData2} disabled={loading}>{loading?"Reloading... ":"reload"}</button>
       {filteredData.map((user) => (
        <p key={user.id}>
          {user.id} {user.title}
        </p>
      ))}
      </div>
    )
}
export default Display2;