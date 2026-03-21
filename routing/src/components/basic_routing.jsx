import { Link, Links, Route, Routes, useParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "React Basics",
    body: "This post explains the basics of React."
  },
  {
    id: 2,
    title: "Understanding useState",
    body: "This post explains how useState works."
  },
  {
    id: 3,
    title: "useEffect Guide",
    body: "This post explains useEffect and side effects."
  }
];

function PostDetails()
{
    const {id} =useParams();
   
    const value= posts.find(p=> p.id === Number(id))
 console.log(value);
 
 if(!value)
 {
    return <p>no item found</p>
 }

    return(
        <div>
            <h1>{value.title}</h1>
            <p> {value.body}</p> 
        </div>
    )
}


    function Home()
    {
        return(
            <h1>this is home </h1>
        )
    }
    function About()
    {
        return(
            <h1>this is about </h1>
        )
    }
    function Contact()
    {
        return(
            <h1>this is contact </h1>
        )
    }

function BasicRouting()
{   


    return(
        <div>
            <h1>basic routing</h1>

           <Link to="/" >home</Link>
           <br />
           <Link to="/about">About</Link>
           <br />
           <Link to="/contact">Contact</Link>

           {posts.map(p=> {return(
            <div key={p.id}>
            <Link to={`/post/ ${p.id}`}> {p.title}</Link>
            <br />
            </div>
           )})}

           <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/about"  element={<About />}/>
            <Route path="/contact"  element={<Contact />}/>
            <Route path="*" element={<h1>sorry the page is not found</h1>} />
            <Route path="/post/:id" element={<PostDetails />} />
           </Routes>

        </div>
    )
}
export default BasicRouting;