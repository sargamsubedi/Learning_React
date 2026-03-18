import useFetch2 from "./useFetch2";



function Display2()
{
    const {data,loading,error,fetchData2} =useFetch2();

 

    if(error)  return(
    <div>
    <button onClick={fetchData2}>Reload</button>
  <p>Can't fetch data , an error occurred  </p>
    </div>

)

    return(
        <div>
            <button onClick={fetchData2} disabled={loading}>{loading?"Reloading... ":"reload"}</button>
       {data.map((user) => (
        <p key={user.id}>
          {user.id} {user.title}
        </p>
      ))}
      </div>
    )
}
export default Display2;