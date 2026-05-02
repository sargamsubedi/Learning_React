import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function Display() {
    const [search, setSearch] = useState("");
    const { data, isLoading, error } = useQuery(
        {
            queryKey: ["post", search], // now the query key is different for every search so fetch data per search 
            queryFn: async () => {
                console.log("data fetch called");

                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);
                return res.json();
            },
            // staleTime: 10000, // how long time does the data is fresh (default 0 sec so fetches data imidiately after we navigate somewhere else and come back )
            enabled: !!search,

        }
    );
    if (isLoading) return <p>data is loading please wait....</p>
    if (error) return <p>error occurred</p>

    if (!search) return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

            <p>try to search something</p>
        </>
    )

    return (
        <>
            <h1>this is display component</h1>

            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

            <div>

                {
                    data.map((post) => (
                        <p key={post.id}>{post.title} </p>
                    ))
                }
            </div>
        </>

    )
}

export default Display;