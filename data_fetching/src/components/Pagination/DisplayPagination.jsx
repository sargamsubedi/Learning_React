import { useEffect, useRef, useState } from "react";
import useFetchPagination from "./useFetchPagination";


function DisplayPagination() {
    const [pageNo, setPageNo] = useState(1);
    const { data, loading, error, moreDataAvailable} = useFetchPagination(25, pageNo);
    const bottomRef = useRef(null);

    useEffect(()=>{
        const  bottom = bottomRef.current;
        const observer = new IntersectionObserver((entries)=>{

            if( !loading&& entries[0].isIntersecting && moreDataAvailable )
            {
                setPageNo(prev=> prev+1);
            }
        })

        if(bottom)
        {
             observer.observe(bottomRef.current);
        }

        return ()=>{
                // keeping both for learning purpose (it doesnt affect code tho) , only one is sufficient for this project 
            if(bottom)  observer.unobserve(bottom) // it removes only bottomref.current
            observer.disconnect() // it removes every elements in observer 
        }
    },[loading,moreDataAvailable])


    if (error) return (
        <div>
            <p>Can't fetch data , an error occurred, please refresh the page </p>
        </div>

    )

    if(loading && pageNo===1)
    {
        return(
            <h1>Data is loading ... please wait</h1>
        )
    }

    return (
        <div>
            {/* <button onClick={() => setPageNo(prev => prev + 1)} 
                 disabled={loading || !moreDataAvailable}> 
                Load More
            </button> */}


            {
                loading && pageNo!==1 && <p>Loading more data</p>
            }

            {data.map((user) => (
                <p key={user.id}>
                    {user.id} {user.title}
                </p>
            ))}
                <div ref={bottomRef} style={{
                    height:"10px",
                    width:"10px",
                }}> </div>
            {
                !loading && data.length === 0 && <p>No results found</p>
            }
            {
                !moreDataAvailable && <p><strong>You have reached the end..</strong></p>
            }
        </div>
    )
}
export default DisplayPagination;