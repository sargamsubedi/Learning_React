import { useEffect } from "react";

 function Testing()
{   let  arr =[];
    let count =0;

    function increasecount()
    {
        
        count =count+1;
    }

    useEffect(()=>{

        arr.push(count);
    },[count])
    return(
        <div>
            <button onClick={increasecount}>add</button>
            {
                arr.forEach(e => {
                    <p>lap no {count}  value: {e}</p>
                    
                })
            }

        </div>
    )
}
export default Testing