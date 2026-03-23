import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";

const posts = [
  { id: 1, title: "React Basics", body: "Learn React basics" },
  { id: 2, title: "useState Hook", body: "Learn useState" },
  { id: 3, title: "useEffect Hook", body: "Learn useEffect" }
];
const comments = {
  1: ["Nice post", "Very helpful"],
  2: ["Good explanation", "Easy to understand"],
  3: ["Thanks!", "Clear concept"]
};

function Posts()
{
    return(
        <div>
            {
                

                posts.map((post)=>(
                    <>
                    <Link id={post.id} to={`./${post.id}`}>{post.title}</Link>
                    <br />
                    </>
                ))

            }

        </div>
    )
}

function PostDetails()

{
    const {id}=useParams();
    const post=posts.find((post)=>(
        post.id===Number(id)
    ))
    
    return(
        <>
            <h1>{post.title}</h1>
            <p>{[post.body]}</p>
            <Link to="comment">Comment</Link>
            <Outlet />
        </>
    )
}

function Comment()
{
    const {id}= useParams();
    const comment= comments[id];

    return(
        <>
        {
            comment.map((comm)=>(
                <p>{comm}</p>
            ))
        }
        
        </>
    )
}

function Exercise1()
{
    return(
        <div>


        <Link to="/posts">show all posts</Link>

        <Routes>
            <Route path="/posts" element={<Posts />}/>
            <Route path="/posts/:id" element={<PostDetails />}>
                <Route path="comment" element={<Comment />} />
            </Route>

            <Route path="*" element={<h1>Path not found</h1>}/>

        </Routes>
        </div>
    )
}
export default Exercise1;