
import Test_data from './components/check'
import Display from './components/display_data'
import Display2 from './components/fetchUsingAsync/display2'
import DisplayForFetchWithAbortAndDebounce from './components/FetchWithAbort&Debounce/display'
import Fetch_data from './components/useFetch'

function App() {

  return (
    <>
      
    <h1>Starting with fetch </h1>
    {/* <Display /> */}

    {/* <Display2 /> */}

    {/* <FetchAndAbort /> */}
    <DisplayForFetchWithAbortAndDebounce />

    </>
    // <Test_data />

  )
}

export default App
