import { useQuery } from "@tanstack/react-query";

function Display()
{

const {data, isLoading , error} = useQuery(
    {
        queryKey: ["post"],
        queryFn: async ()=>{
            const res =  await fetch("https://jsonplaceholder.typicode.com/posts");
            return  res.json();
        }
    }
);
    if(isLoading) return <p>data is loading please wait....</p>
    if(error) return <p>error occurred</p>

    return(
    <>
        <h1>this is display component</h1>
        <div>

            {
                data.map((post)=>(
                    <p key={post.id}>{post.title} </p>
                ))
            }
        </div>
    </>

    )
}

export default Display;