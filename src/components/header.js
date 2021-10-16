import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../productContext";

const Header = () => {

    const { productData, loggedIn, logout } = useContext(ProductContext);

    // const isLoggedin = false;

    const showLoggedIn = () => {
        if (loggedIn) {
            return (
                <>
                    <li className="nav-item"><NavLink to="/home" activeClassName="active" className="nav-link" aria-current="page">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/userdashboard" activeClassName="active" className="nav-link" aria-current="page">UserDashboard</NavLink></li>
                    <li className="nav-item"><NavLink to="/productlist" activeClassName="active" className="nav-link" aria-current="page">Browse Products</NavLink></li>
                    <li className="nav-item"><NavLink to="/gallery" activeClassName="active" className="nav-link" aria-current="page">Gallery</NavLink></li>
                    <li className="nav-item"><NavLink to="/addvideo" activeClassName="active" className="nav-link" aria-current="page">Add New Video</NavLink></li>
                    <li className="nav-item"><button onClick={logout} className="btn btn-danger" aria-current="page">Logout</button></li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item"><NavLink to="/login" activeClassName="active" className="nav-link">Login</NavLink></li>
                    <li className="nav-item"><NavLink to="/signup" activeClassName="active" className="nav-link">Signup</NavLink></li>
                </>
            )
        }
    }

    return (
        <div class="container">
            <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">

                    {showLoggedIn()}
                    <li class="nav-item"><a href="/" class="nav-link">{productData.length}</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Logged in Status : {loggedIn ? "Loggedin" : "NOt Logged in"}</a></li>

                </ul>
            </header>
        </div>
    )
}
export default Header;