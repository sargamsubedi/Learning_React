import { useEffect, useState } from "react"

function Countdown()
{
    const [time,setTime] =useState(0);
    const [isrunning, setIsrunning] =useState(false);
    const[userinput, setUserinput] =useState(0);
    // why i need a userinput why not store on direct time? because when i do it and use change value in midcount down the counter starts from newvalue , by using this we prevent it 
    function toggleIsRunning()
    {   
        if(!isrunning)
        {
            setTime(userinput);
        }
        setIsrunning(prev=>!prev)
    }

    useEffect(()=>{
        if(!isrunning) return;
        const interval =setInterval(() => {

            // why this logic because when i use simple if/else the setinterval see initial time not the updated so the time runs in negative also

            setTime(prev=>{ 
                if(prev <=1)
                {
                    setIsrunning(prev=>!prev);
                    return 0;

                }
                return prev-1;
            })
             
        }, 1000);

        return ()=>{
            clearInterval(interval)
        };
    },[isrunning])

    return(
        <div>
            <h1> {time} </h1>
            <input type="number" onChange={(e)=>{setUserinput(Number(e.target.value))}}  />
            <button onClick={toggleIsRunning}> {!isrunning?"Start":"Stop"}</button>

        </div>
    )
}

export default Countdown