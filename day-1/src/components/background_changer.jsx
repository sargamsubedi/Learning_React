import { useEffect, useState } from "react";

function ToogleBackground()
{

    const [isrunning,setIsrunning] =useState(false);
  
     function ToggleIsRunning()
     {
        setIsrunning(prev => !prev);
     }
     
    useEffect(()=>{
        if (!isrunning) return;
        const interval = setInterval(()=>{
            const red =  Math.random()*255;
            const green =  Math.random()*255;
            const blue =  Math.random()*255;
             document.body.style.backgroundColor= `rgb(${red},${green},${blue})`;
        },1000)

        return()=>{
            clearInterval(interval);
        }


    },[isrunning])

    return(
        <div>   
            <button onClick={ToggleIsRunning}>{isrunning? "stop":"start"}</button>

        </div>
    )
}

export default ToogleBackground;