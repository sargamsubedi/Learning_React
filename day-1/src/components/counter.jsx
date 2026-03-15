import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function IncreaseCounter() {
    setCount(count + 1);
  }
  function DecreaseCounter()
  {
    if(count>0)
      setCount(count-1);
  }
  function ResetCounter()
  {
    setCount(0);
  }

  return (
    <div>
      <button onClick={IncreaseCounter}>Increase Counter</button>
      <button onClick={DecreaseCounter}>Decrease Counter</button>
      <button onClick={ResetCounter}>Reset Counter</button>


      <h2>The value of counter is <b>{count}</b> </h2>
    </div>
  );
}