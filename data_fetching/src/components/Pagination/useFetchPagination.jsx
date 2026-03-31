import { useEffect, useState } from "react";

function useFetchPagination(Limit = 5, LoadMore) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setError(false);

                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${Limit}&_page=${LoadMore}`);
                const result = await res.json();
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

    return { data, loading, error };
}

export default useFetchPagination;