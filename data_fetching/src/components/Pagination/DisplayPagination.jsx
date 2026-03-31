import { useState } from "react";
import useFetchPagination from "./useFetchPagination";


function DisplayPagination() {
    const [pageNo, setPageNo] = useState(1);
    const { data, loading, error, moreDataAvailable} = useFetchPagination(25, pageNo);
    if (error) return (
        <div>
            <p>Can't fetch data , an error occurred, please refresh the page </p>
        </div>

    )

    if(loading)
    {
        return(
            <h1>Data is loading ... please wait</h1>
        )
    }

    return (
        <div>
            <button onClick={() => setPageNo(prev => prev + 1)} 
                 disabled={loading || !moreDataAvailable}> 
                Load More
            </button>

            {data.map((user) => (
                <p key={crypto.randomUUID()}>
                    {user.id} {user.title}
                </p>
            ))}

            {
                !loading && data.length === 0 && <p>No results found</p>
            }
            {
                !moreDataAvailable && <p><strong>You have reached the end..</strong></p>
            }
        </div>
    )
}
export default DisplayPagination;