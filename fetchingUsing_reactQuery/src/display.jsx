import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import useDebounce from "./hooks/useDebounce";

function Display() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    // const [allPosts, setAllPosts] = useState([]); // we needed this when we implement infinite scroll manually , not when we use infinitequery. 
    const bottomRef = useRef(null);

    const debouncedSearch = useDebounce(search);

    // fetching logic using usequery

    // const { data, isLoading, error } = useQuery(
    //     {
    //         queryKey: ["posts", debouncedSearch, page], // now the query key is different for every search so fetch data per search 
    //         queryFn: async () => {
    //             console.log("data fetch called");

    //             let url = search ? `https://jsonplaceholder.typicode.com/posts?q=${search}&_limit=10&_page=${page}` : `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`

    //             const res = await fetch(url);
    //             return res.json();
    //         },
    //         // staleTime: 10000, // how long time does the data is fresh (default 0 sec so fetches data imidiately after we navigate somewhere else and come back )

    //         // enabled: !!search, // when to fetch data? if enable: true then only it fetches data
    //         keepPreviousData: true
    //     }
    // );


    // fetching logic using useInfiniteQuery

    // structure of data
    //     data = {
    //   pages: [...], // it includes data fetched for each page pages = [ [page1 data],[page2 data],[page3 data] ]
    //   pageParams: [...]  // This stores WHICH page was used each time , pageParams = [1, 2, 3]
    // }


        // isLoading is only true for first fetch only , for other pages we should use isfetchingnextpage
    const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["posts", debouncedSearch, page],
        queryFn: async ({ pageParam = 1 }) => {
            console.log("fetching data for page: ", { pageParam });

            let url = search ? `https://jsonplaceholder.typicode.com/posts?q=${search}&_limit=10&_page=${pageParam}` : `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageParam}`

            const res = await fetch(url);
            return res.json();
        },
        getNextPageParam: (lastPage, allPage) => {


            // lastPage is data from latest/recent page

            // structure of all page is: it contains data of all pages fetched till now 
            //  allPages = [
            //   [a,b,c,d,e],   // page 1
            //   [f,g,h,i,j]    // page 2
            // ]

            if (lastPage.length == 0) return undefined; // if no data is fetched from last fetch dont fetch anymore
            return (allPage.length + 1); // give lastpagefetched+1 for fetch new data 

        }

    })


    // useEffect(() => {
    //     setPage(1);
    // }, [debouncedSearch])


    // useEffect(() => {
    //     if (data) {
    //         if (page === 1) {
    //             setAllPosts(data)
    //         }
    //         else {

    //             setAllPosts(prev => [...prev, ...data]);
    //         }

    //     }

    // }, [data, page])

    // effect for infinite scroll.. 
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {

            if (entries[0].isIntersecting) {

                // used when manually implemented infiniteScroll

                // if (!isLoading && data.length) {
                //     // setPage(prev => prev + 1); 
                // }

                if(hasNextPage)
                {
                    fetchNextPage();
                }
            }


        })

        if (bottomRef.current) {
            observer.observe(bottomRef.current);
        }

        return () => {
            observer.disconnect();
        }

    }, [isLoading, data])// to remove the stale closure values


    const posts = data?.pages.flat() || [];
    if (isLoading) return <p>data is loading please wait....</p>
    if (error) return <p>error occurred: {error}</p>



    return (
        <>
            <h1>this is display component</h1>

            <h1>{page}</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

            {
                isFetchingNextPage   && <p>Loading...</p>
            }


            <div>

                {
                    posts.map((post) => (
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
                width: 100
            }}></div>
        </>

    )
}

export default Display;