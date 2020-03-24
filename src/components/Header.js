import React from "react";
import { NavLink } from "react-router-dom";

import "../style/header.css";
import kevinLogo from "../images/logo.png";

class Header extends React.Component {
    render() {
        return(
            <header>
                <NavLink to="/">
                    <div className="kevinLogo">
                        <img src={kevinLogo} alt="kevinLogo"></img>
                    </div>
                </NavLink>
                <nav>
                    <ul>
                        <li className="navLinks">
                            <NavLink exact to="/about">About</NavLink>
                        </li>
                        <li className="navLinks">
                            <NavLink exact to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li className="navLinks">
                            <NavLink exact to="/experience">Experience</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

        )

    }



}

export default Header;