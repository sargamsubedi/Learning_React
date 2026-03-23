
import { BrowserRouter } from "react-router-dom";
import BasicRouting from "./components/basic_routing";
import Structure from "./components/Structure";
import NestedRouting from "./components/nested_routing";
import Exercise1 from "./components/exercise1";

function App() {
  
  return (
    <BrowserRouter>
    
      <h1>learning Routing</h1>
      {/* <BasicRouting /> */}
 
    {/* <Structure /> */}

    {/* <NestedRouting /> */}

    <Exercise1 />
    </BrowserRouter>
  )
}

export default App
