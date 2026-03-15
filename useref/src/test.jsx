import { useRef, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
const timerRef = useRef(()=>{count});
timerRef.current=count;
  function startTimer() {
    setTimeout(() => {
      console.log(timerRef.current);
    }, 3000);
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={startTimer}>
        Start Timer
      </button>
    </>
  );
}

export default Timer;