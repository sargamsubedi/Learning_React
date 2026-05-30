
function App() {
  const BASE_URL= "https://jsonplaceholder.typicode.com/posts"
const handleClick = async ()=>{
  const res = await fetch(
    BASE_URL,
    {
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify({
        name:"sargam",
        age: 21
      })
    }
  );
  console.log(res);

  const data = await res.json();
  console.log(data);
  
}

  return(
    <>
    <h1>learning post operations using fetch api</h1>
    <button onClick={handleClick}>Send data</button>


    </>
  )
}

export default App
