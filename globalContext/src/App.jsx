import { BrowserRouter } from "react-router-dom";
import './App.css'
import Dashboard from './component/login'
import RouteDefiner from './component/protectedRoute'
import A from './component/theme'
import Toggle from './component/toggletheme'

function App() {

  return (
    <>
    <h1>
      learning usecontext
    </h1>
    
    {/* <A /> */}
    {/* <Toggle /> */}
    {/* <Dashboard /> */}

    <BrowserRouter>
        <RouteDefiner />
    </BrowserRouter>
    </>
  )
}

export default App
