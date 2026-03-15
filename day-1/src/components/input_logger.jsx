import { useEffect, useState } from "react"

// due to some reason the useeffect isnt working 
// the changed value is displayed on screen but not in console
function InputLogger() {
    const [inputString, setInputString] = useState("sargam");

    useEffect(() => {
        console.log(inputString)

    }, [inputString])
   
    return (
        <div>
            <input type="text"  value={inputString} onChange={(e)=>setInputString(e.target.value)}/>
            
            <p>{inputString}</p>
        </div>
    )
}
export default InputLogger