
import { useRef, useEffect } from "react";
import  './App.css'

function InfiniteScroll()
{   
    const bottomRef = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            // imp methods on entries object , .isintersecting -true if visible partially/fully 
            // .target -> actual dom element observed 
            // .intersectionRatio -> how much element is visible (0-1)
            if(entries[0].isIntersecting)
            {
                console.log("you have reached bottom");
            }
            console.log("re-rendered");
            
        },{threshold: 0.5} // this threshold is optional by deafult it is on 0 so when the component is visible by even 1 pixel the callback runs , we can modify it as value as shown or as array , threshold :[0.1,0.2,0.3,...] (its in percentage 0.5 means when 50% shown)
    );
        if(bottomRef.current)
        {
            observer.observe(bottomRef.current);
        }

        return ()=>{
            observer.disconnect();
        }
    },[])

    return(
        <>
        <div className="content"> This div shows content</div>
        <div ref={bottomRef}>this is the end.. </div>
        </>
    )
}

export default InfiniteScroll;