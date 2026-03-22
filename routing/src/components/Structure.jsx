import { Link, Route, Routes } from "react-router-dom";

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

function About() {
    return (
        <h1>This is about</h1>
    )
}

function Contact() {
    return (
        <h1>This is Contact</h1>
    )
}


function Structure() {
    return (
        <>


            <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>Path not found</h1>} />

            </Routes>
            <Footer />
        </>
    )
}

export default Structure;