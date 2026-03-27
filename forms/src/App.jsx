import Login from "./components/login"
import LogIn from "./components/LoginWithDashboard"
import { BrowserRouter } from "react-router-dom";
import Container from "./LoginWithDashboard/container";



function App() {

  return (
    <>
      <h1>learning forms</h1>

      {/* <Login /> */}
    <BrowserRouter>
      {/* <LogIn /> */}
      <Container />
    </BrowserRouter>
    </>
  )
}

export default App
