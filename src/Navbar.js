import "./Navbar.css"
function Navbar()
{
    return(
        <div className="navbar">
            <div><a className="linktag" href="/">Home</a></div>
            <div><a className="linktag" href="/Addproduct">Add Task</a></div>
            <div><a className="linktag" href="/Loginform">Login</a></div>
            <div><a className="linktag" href="/Register">Register</a></div>
        </div>
    )
}
export default Navbar