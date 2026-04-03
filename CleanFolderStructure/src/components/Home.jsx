import { useEffect, useState } from "react";
import usePosts from "../customHooks/usePosts";
import useDebounce from "../customHooks/useDebounce";

function Home() {
    const [input, setInput] = useState("");
    const [page, setPage] = useState(1);
    const deboundedInput = useDebounce(input);
    const { loading, error, data } = usePosts(deboundedInput, page);

    useEffect(() => {
        setPage(1);
    }, [deboundedInput])

    if (error) return <h1>An error occurred.. </h1>
    if (loading && page === 1) return <h1>Data is loading.. Please wait</h1>
    return (
        <>
            <input type="text"
                placeholder="Search here..."
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
            />
            <button onClick={() => setPage(prev => prev + 1)}>Load More</button>

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
        </>
    )
}


export default Home;