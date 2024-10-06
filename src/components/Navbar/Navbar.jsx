import React from "react";
import './Navbar.css';

const Navbar = () =>{
    return (
        <>
            <nav className="navbar">
                <h1 className="site-title">BlogSite</h1>
                <ul className="nav-items">
                    <li className="nav-links">Home</li>
                    <li className="nav-links">About us</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;