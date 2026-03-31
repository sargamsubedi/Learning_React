import { useEffect, useRef, useState } from "react";

function useFetchPagination(Limit = 5, page) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [moreDataAvailable, setMoreDataAvailable] = useState(true);
    const hasFetched =useRef(false) // to handle strictmode double mount in initial phase

    useEffect(() => {
        async function fetchData() {

            
            try {
                setLoading(true);
                setError(false);

                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${Limit}&_page=${page}`);
                const result = await res.json();
                console.log(result);

                if (!result.length) {
                    setMoreDataAvailable(false);
                }
                setData(prev => [...prev, ...result]);
            }
            catch {
                setError(true);
            }
            finally {
                setLoading(false);

            }

        }

 // to handle strictmode double mount in initial phase
        if(hasFetched.current && page===1) return
        fetchData();
        if(page===1) hasFetched.current=true;
    }, [Limit, page])

    return { data, loading, error, moreDataAvailable };
}

export default useFetchPagination;