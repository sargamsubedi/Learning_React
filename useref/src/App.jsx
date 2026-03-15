import Search from "./customHooks_practice/debounce_component"
import useCounter from "./customHooks_practice/useCounter"
import Previous from "./customHooks_practice/useprevious_component"
import Timer from "./test"

function App() {
  // const [count, increment, decrement, reset] = useCounter(10)
  


  return (
    // for useCounter
    // <div>
    //   <h1>{count}</h1>
    //   <button onClick={increment}>+</button>
    //   <button onClick={decrement}>-</button>
    //   <button onClick={reset}>Reset</button>
    // </div>

    // for Search with debounce
    <div>
      <Search />
    </div>
    

    // for useprevious custom hook
    // <Previous />

    // <Timer />

  
    
  )
}

export default App
