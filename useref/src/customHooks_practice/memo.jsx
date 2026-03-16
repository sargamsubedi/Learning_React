
import { useMemo, useState } from "react";
function Memorization()
{

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function slowFunction(num) {
    console.log("slow function running");

    for (let i = 0; i < 1000; i++) {} // Simulate a slow function

    return num * 2;
  }

  const result = useMemo(() => slowFunction(count), [count]);

  return (
    <>
      <h1>{result}</h1>
      <h1>{text}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
export default Memorization;