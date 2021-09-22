import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const isLoggedin = true;

    const showLoggedIn = () => {
        if (isLoggedin) {
            return (
                <>
                    <li className="nav-item"><NavLink to="/home" activeClassName="active" className="nav-link" aria-current="page">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/userdashboard" activeClassName="active" className="nav-link" aria-current="page">UserDashboard</NavLink></li>
                    <li className="nav-item"><NavLink to="/productlist" activeClassName="active" className="nav-link" aria-current="page">Browse Products</NavLink></li>
                    <li className="nav-item"><NavLink to="/gallery" activeClassName="active" className="nav-link" aria-current="page">Gallery</NavLink></li>
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
                    <li class="nav-item"><Link to="/" class="nav-link">Root</Link></li>
                    <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">About</a></li>

                </ul>
            </header>
        </div>
    )
}
export default Header;