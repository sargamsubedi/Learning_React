import { Link, Outlet, Route, Routes } from "react-router-dom";

function Navbar() {
    return (
        <>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>
        </>
    )
}

function Footer() {
    return (
        <h1>This is footer</h1>
    )
}

function Home() {
    return (
        <h1>This is home</h1>
    )
}
function Team() {
    return (
        <>
        <h1>This is team</h1>
        {/* .. means go one level up in this case 'about' similarly ../.. means goto two level up */}
        <Link to="..">go back</Link>
        <br />
        <Link to="../..">goto home</Link>

        <br />  
        {/* . means remains in the same path , so it does re-navigation without rendering */}
        <Link to=".">refresh</Link>
        

        </>
    )
}

function About() {
    return (
        <>
        <h1>This is about</h1>
        {/* it means goto this absolute path */}
        {/* <Link to="/about/team">Teams</Link>    */}
        {/* it means goto team child route of about named team */}
        <Link to="team">Teams</Link>

        <Outlet />
        </>
    )
}

function Contact() {
    return (
        <h1>This is Contact</h1>
    )
}


function NestedRouting() {
    return (
        <>


            <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} >
                    <Route path="team" element={<Team /> } />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>Path not found</h1>} />

            </Routes>
            <Footer />
        </>
    )
}

export default NestedRouting;