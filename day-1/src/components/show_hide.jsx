import { useState } from "react"

function ShowHide()
{
    const [flag,setFlag]= useState(false);

    function ToggleParagraph()
    {
        setFlag(!flag);
    }

    return(
    <div>
        <button onClick={ToggleParagraph}>click here to show/hide the paragraph</button>
       { flag? <p>this is the paragraph that will show/hide according to your action</p>
            : null}
    </div>

)}

export default ShowHide