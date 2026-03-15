import { useState } from "react";
import usePrevious from "./usePrevious";

function Previous() {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);


  return (
    <div>
      <h1>Current: {count}</h1>
      <h2>Previous: {prev}</h2>

      <button onClick={() => setCount(count + 3)}>
        Increase
      </button>
    </div>
  )
}
export default Previous;