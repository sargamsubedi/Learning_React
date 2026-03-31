import { useState } from "react";
import useFetchPagination from "./useFetchPagination";


function DisplayPagination() {
    const [pageNo, setPageNo] = useState(1);
    const { data, loading, error } = useFetchPagination(5, pageNo);
    if (error) return (
        <div>
            <p>Can't fetch data , an error occurred, please refresh the page </p>
        </div>

    )

    return (
        <div>
            <button onClick={() => setPageNo(prev => prev + 1)}>Load More</button>
            {data.map((user) => (
                <p key={user.id}>
                    {user.id} {user.title}
                </p>
            ))}

            {
                !loading && data.length === 0 && <p>No results found</p>
            }
        </div>
    )
}
export default DisplayPagination;