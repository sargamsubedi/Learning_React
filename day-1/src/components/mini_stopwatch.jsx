import { useEffect, useState } from "react"

 export default function StopWatch()
{

    const [time,setTime] =useState(0);
    const[isrunning,setIsrunning] =useState(false);
    const[lap,setLap]=useState([]);


    function TimeStartStop()
    {
        setIsrunning(prev => !prev); 
    }

    function AddLap(){
        setLap(prev=>[...prev ,time]);
    }

    function TimeReset()
    {
        setIsrunning(false); // if running and hit reset , stop time
        setTime(0); // reset time
        setLap(prev=> []); // reset the lap

    }

    useEffect(()=>{
        if(!isrunning) return;

        const interval = setInterval(() => {
            setTime(prev=> prev+1);
        }, 1000);

        return(()=>{
            clearInterval(interval);
        })


    },[isrunning])



    return(
        <div>
            <h1>{time}</h1>
            <button onClick={TimeStartStop}>{isrunning? "Stop":"Start"}</button>
            <button onClick={TimeReset}>Reset</button>
            <button onClick={AddLap}>Lap</button>

            {
                lap.map((laps,index)=>{
                    return(
                    <p key={index}> lap: {index+1} time: {laps}</p>
                    )

                })
            }
          
        </div>
    )
}