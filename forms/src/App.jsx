import Login from "./components/login"
import { BrowserRouter } from "react-router-dom";
import Container from "./LoginWithDashboard/container";



function App() {

  return (
    <>
      <h1>learning forms</h1>

      {/* <Login /> */}
    <BrowserRouter>
      <Container />
    </BrowserRouter>
    </>
  )
}

export default App
