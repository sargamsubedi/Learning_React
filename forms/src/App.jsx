import Login from "./components/login"
import LogIn from "./components/LoginWithDashboard"
import { BrowserRouter } from "react-router-dom";



function App() {

  return (
    <>
      <h1>learning forms</h1>

      {/* <Login /> */}
    <BrowserRouter>
      <LogIn />
    </BrowserRouter>
    </>
  )
}

export default App
