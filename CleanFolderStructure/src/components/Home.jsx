import { useEffect, useRef, useState } from "react";
import usePosts from "../customHooks/usePosts";
import useDebounce from "../customHooks/useDebounce";

function Home() {
    const [input, setInput] = useState("");
    const [page, setPage] = useState(1);
    const debouncedInput = useDebounce(input);
    const bottomRef =useRef(null);
    const { loading, error, data ,isMoreDataAvailable } = usePosts(debouncedInput, page);

    // for infinite scroll
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{

            if(!loading && entries[0].isIntersecting && isMoreDataAvailable )
            {
                setPage(prev=>prev+1);
            }

        })

        if(bottomRef.current)
        {
            observer.observe(bottomRef.current);
        }

        return ()=>{
            observer.disconnect();
        }
    },[loading, isMoreDataAvailable])


    useEffect(() => {
        setPage(1);
    }, [debouncedInput])

    if (error) return <h1>An error occurred.. </h1>
    if (loading && page === 1) return <h1>Data is loading.. Please wait</h1>
    return (
        <>
            <input type="text"
                placeholder="Search here..."
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
            />

            {
                loading && page !== 1 && <p>more data loading ...</p>
            }

            {
                data.map((val) => (
                    <div key={val.id}>
                        {val.id} {val.title}
                    </div>
                ))
            }

            {
                !loading && data.length === 0 && <h1>No result found..</h1>
            }
            {
                !isMoreDataAvailable && <p><strong>You have reached to the end</strong></p>
            }

            <div ref={bottomRef} style={{
                height: "20px",
                width: "100%"
            }}></div>
        </>
    )
}


export default Home;