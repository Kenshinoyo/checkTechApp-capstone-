import React from 'react';
import { Link } from 'react-router-dom'; //<--This import is neded in order to use the <Link> tag




const NavBar = () => {
    
    return (
        
        <nav id="nav-bar">
            <ul> {/*<--Wrapped the links in an unordered list to keep them organized */}
                <li>
                    <Link to="/">Home</Link> {/*<--The syntax within the "to" parameter, 
                                            refers to the HTTP GET request for the applicable page being navigated to. */}
                </li>

                <li>
                    <Link to="/movies">Movies</Link>
                </li>
            </ul>
        </nav>

    )
}

export default NavBar;