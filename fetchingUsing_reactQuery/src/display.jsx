import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import useDebounce from "./hooks/useDebounce";

function Display() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [allPosts, setAllPosts] = useState([]);
    const bottomRef = useRef(null);

    const debouncedSearch = useDebounce(search);


    const { data, isLoading, error } = useQuery(
        {
            queryKey: ["posts", debouncedSearch, page], // now the query key is different for every search so fetch data per search 
            queryFn: async () => {
                console.log("data fetch called");

                let url = search ? `https://jsonplaceholder.typicode.com/posts?q=${search}&_limit=10&_page=${page}` : `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`

                const res = await fetch(url);
                return res.json();
            },
            // staleTime: 10000, // how long time does the data is fresh (default 0 sec so fetches data imidiately after we navigate somewhere else and come back )

            // enabled: !!search, // when to fetch data? if enable: true then only it fetches data
            keepPreviousData: true
        }
    );


    useEffect(() => {
        setPage(1);
    }, [debouncedSearch])


    useEffect(() => {
        if (data) {
            if (page === 1) {
                setAllPosts(data)
            }
            else {

                setAllPosts(prev => [...prev, ...data]);
            }

        }
        console.log(data);
        
    }, [data,page])

    // effect for infinite scroll.. 
    useEffect(()=>{

        const observer = new IntersectionObserver((entries)=>{
            
            console.log("inside intersection observer");
            
            console.log(entries);
            if(entries[0].isIntersecting)
            {
                if(!isLoading && data.length)
                {
                    setPage(prev=>prev+1);

                }
            }
            

        })

        if(bottomRef.current)
        {
            observer.observe(bottomRef.current);
        }

        return ()=>{
            observer.disconnect();
        }

    },[isLoading,data])// to remove the stale closure values

    if (isLoading && page===1) return <p>data is loading please wait....</p>
    if (error) return <p>error occurred</p>



    return (
        <>
            <h1>this is display component</h1>

        <h1>{page}</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => setPage(prev => prev + 1)}>Load More</button>
            {
                isLoading && <p>Loading...</p>
            }


            <div>

                {
                    allPosts.map((post) => (
                        <p key={post.id}>{post.id}: {post.title} </p>
                    ))
                }
            </div>

            {
               !isLoading && !data.length && <strong> you have reached the end   </strong>

            }

            {/* this is the bottom which helps to load more data... */}
            <div ref={bottomRef} style={{
                height: 100,
                width:100
            }}></div>
        </>

    )
}

export default Display;