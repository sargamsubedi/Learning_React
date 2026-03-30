import { useEffect, useState } from "react";

function FetchAndAbort() {
    const [input, setInput] = useState("");
useEffect(() => {
  const controller = new AbortController();

  const fetchData = async () => {
    try {
      await new Promise(res => setTimeout(res, 2000)); // simulation of delay

      const res = await fetch("https://jsonplaceholder.typicode.com/posts",
        { signal: controller.signal }
      );    

      const data = await res.json();
      console.log("DATA:", data);

    } catch (err) {
      if (err.name === "AbortError") {
        console.log(" request aborted");
      } else {
        console.log("error occurs");
      }
    }
  };

  fetchData();

  return () => {
    controller.abort();
  };
}, [input]);


    return (
        <>
            <input type="text" onChange={(e) => { setInput(e.target.value) }} />
        </>
    )
}

export default FetchAndAbort;