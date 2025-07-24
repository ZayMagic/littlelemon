import React from 'react';
import logo from "./assets/Logo.svg";

const Nav = () => {

return(
    <nav>
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Menu</a>
            </li>
            <li>
                <a href="">Reservations</a>
            </li>
            <li>
                <a href="">Order Online</a>
            </li>
            <li>
                <a href="">Login</a>
            </li>
        </ul>
    </nav>
)
}
export default Nav;