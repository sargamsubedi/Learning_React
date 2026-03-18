import { useEffect } from "react";
import useFetchData from "./useFetch";

function Display()
{
    const {data,loading,error,fetch_data} =useFetchData();

    if(loading) return(
    <div>
    <p>Data is loading ... please wait </p>
    </div>

)

    if(error)  return(
    <div>
    <button onClick={fetch_data}>Reload</button>
  <p>Can't fetch data , an error occurred  </p>;
    </div>

)

    return(
        <div>
            <button onClick={fetch_data}>Reload</button>
       {data.map((user) => (
        <p key={user.id}>
          {user.id} {user.title}
        </p>
      ))}
      </div>
    )
}
export default Display;