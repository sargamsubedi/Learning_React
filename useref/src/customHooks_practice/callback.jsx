
// how it is working? react.memo is a component that re-render only when props changed 
// but only it doesnt solve it because its prop is function and each time parent renders the function reference changes even tho its same function , so i am using usecallback to make sure the function reference remains same after parent re-renders 

import React, { useState, useCallback } from "react";

const Child = React.memo(function Child({ onClick }) {
  console.log("child render");

  return (
    <button onClick={onClick}>
      Click me
    </button>
  );
});


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

const memorizedHandleClick = useCallback(() => {
    setCount(prev=> prev+1);
  },[]);
 


  return (
    <>
      <Child onClick={memorizedHandleClick} />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h1>{count}</h1>
    </>
  );
}