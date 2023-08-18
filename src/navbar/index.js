import React from "react";
import './style.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h3 className="logo">Foodle</h3>
            <ul className="navlinks">
                <li> <a href="/home">Home</a> </li>
                <li> <a href="/offer">Offer</a> </li>
                <li> <a href="/service">Service</a> </li>
                <li> <a href="/offer">Menu</a> </li>
                <li> <a href="about us">About Us</a> </li>
            </ul>
            <ul className="linklist">
                <li> <a href="login">Login</a> </li>
                <li className="sign"> <a href="sign up">Sign Up</a> </li>
            </ul>
        </nav>
    );
}

export default Navbar;
