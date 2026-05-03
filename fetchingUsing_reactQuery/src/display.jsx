import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function Display() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [allPosts, setAllPosts] = useState([]);



    const { data, isLoading, error } = useQuery(
        {
            queryKey: ["posts", search, page], // now the query key is different for every search so fetch data per search 
            queryFn: async () => {
                console.log("data fetch called");

                let url = search ? `https://jsonplaceholder.typicode.com/posts?q=${search}&_limit=5&_page=${page}` : `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`

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
    }, [search])


    useEffect(() => {
        if (data) {
            if (page === 1) {
                setAllPosts(data)
            }
            else {

                setAllPosts(prev => [...prev, ...data]);
            }

        }
    }, [data,page])



    if (isLoading && page===1) return <p>data is loading please wait....</p>
    if (error) return <p>error occurred</p>



    return (
        <>
            <h1>this is display component</h1>


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
        </>

    )
}

export default Display;