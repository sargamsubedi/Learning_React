import { useEffect, useState } from "react";

function useFetchPagination(Limit = 5, LoadMore) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [moreDataAvailable, setMoreDataAvailable] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setError(false);

                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${Limit}&_page=${LoadMore}`);
                const result = await res.json();
                console.log(result);
                
                if(!result.length)
                {
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



        fetchData();
    }, [Limit, LoadMore])

    return { data, loading, error, moreDataAvailable};
}

export default useFetchPagination;