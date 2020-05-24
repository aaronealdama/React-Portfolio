import React from 'react';
import {Link} from 'react-router-dom';
import "./index.css";

function NavBar() {
    return (
        <div>
            <div className="NavBar">
                <nav className="NavBar-navigation">
                    <ul className="NavBar-list">
                        <li className="NavBar-listItem">
                            <Link className="NavBar-link" to="/home">Home</Link>
                        </li>
                        <li className="NavBar-listItem">
                            <Link className="NavBar-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="NavBar-listItem">
                            <Link className="NavBar-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;