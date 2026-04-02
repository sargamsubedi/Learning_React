import { useEffect, useRef, useState } from "react";
import useDebounce from "../fetchUsingAsync/useDebounce";
import useFetchAndAbort from "./abortFetch";

function DisplayForFetchWithAbortAndDebounce() {
  const [reload, setReload] = useState(0);
  const [input, setInput] = useState("");
  const debouncevalue = useDebounce(input, 500)
  const { data, error, loading } = useFetchAndAbort(debouncevalue, reload);



  if (error) return (
    <div>
      <button
        onClick={() => { setReload(prev => prev + 1) }} // to recall the api with same input
      >Reload</button>
      <p>Can't fetch data , an error occurred  </p>
    </div>
  )

  if(loading)
  {
    return <h1>Data is loading , please wait</h1>
  }
  return (
    <div>
      <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />

      <button
        onClick={() => { setReload(prev => prev + 1) }}
      >reload</button>
      {data.map((user) => (
        <p key={user.id}>
          {user.id} {user.title}
        </p>
      ))}

      {
       !loading && data.length === 0 && <p>No results found</p>
      }
    </div>
  )
}
export default DisplayForFetchWithAbortAndDebounce;