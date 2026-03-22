
import { BrowserRouter } from "react-router-dom";
import BasicRouting from "./components/basic_routing";
import Structure from "./components/Structure";
import NestedRouting from "./components/nested_routing";

function App() {
  
  return (
    <BrowserRouter>
    
      <h1>learning Routing</h1>
      {/* <BasicRouting /> */}
 
    {/* <Structure /> */}

    <NestedRouting />
    </BrowserRouter>
  )
}

export default App
