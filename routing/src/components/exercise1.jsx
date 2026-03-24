import { Link, NavLink, Outlet, Route, Routes, useParams } from "react-router-dom";

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

function Posts() {
    return (
        <div>
            {


                posts.map((post) => (
                    <div key={post.id}>
                        <Link to={`./${post.id}`}>{post.title}</Link>

                    </div>
                ))
            }
            <Outlet />
        </div>
    )
}

function PostDetails() {
    const { id } = useParams();
    const post = posts.find((post) => (
        post.id === Number(id)
    ))
    if (!post) return (
        <h1>post not found</h1>
    )
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to="comments">Comment</Link>
            <br />
            <Link to="..">Go Back</Link>

            <Outlet />
        </>
    )
}

function Comments() {
    const { id } = useParams();
    const comment = comments[id];

    return (
        <>
            {
                comment.map((comm, index) => (
                    <p key={index}>{comm}</p>
                ))
            }

        </>
    )
}

function Exercise1() {
    return (
        <div>

            {/* what is navlink? -> it is similar to link , it has a special feature called isactive which will be true if the url matches its route , and we can render/update ui by using this  */}

            {/* <NavLink to="/posts">show all posts</NavLink> */}


{/* what is end in navlink -> if we arent using end "isactive" will be enabled in partial matching also {url: post/1 to="/post"}isactive=true , if we are using it it should match exactly to isactive to be true, {url: post/1 to="/post"}isactive=false  */}
            <NavLink
                to="/posts"
                style={({ isActive }) => ({
                    color: isActive ? "red" : "black"
                })}
                // end 
            >
                Posts
            </NavLink>

            <Routes>
                <Route path="/" element={<h1>this is homepage</h1>} />
                <Route path="/posts" element={<Posts />}>
                    <Route path=":id" element={<PostDetails />}>
                        <Route path="comments" element={<Comments />} />
                    </Route>
                </Route>

                <Route path="*" element={<h1>Path not found</h1>} />

            </Routes>
        </div>
    )
}
export default Exercise1;