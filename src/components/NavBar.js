import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { SocialIcon } from "react-social-icons";
import Logo from "../Rui.svg";
import hamburger from "../hamburger.svg";
import hamburgerClose from "../hamburgerClose.svg";
import "./NavBar.css";

const NavBar = ({ handleClick, navOpen }) => {
    const [rotate, setRotate] = useState(false);
    const handleNavClick = () => {
        handleClick();
        setRotate(true);
        setTimeout(() => {
            setRotate(false);
        }, 2000);
    };
    return (
        <header className="NavBar" style={{ position: `${navOpen ? "fixed" : "absolute"}` }}>
            <div className="Nav">
                <nav className="nav-items">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white" className="">

                        <img src={Logo} alt="rui logo" />
                    </NavLink>
                    <div className="NavLinks" >
                        <NavLink
                            to="/about"
                            activeClassName="navActive"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 text-bold hover:text-blue-400">
                            About Me
                    </NavLink>
                        <NavLink
                            to="/project"
                            activeClassName="navActive"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-blue-400">
                            Projects
                    </NavLink>
                        <NavLink
                            to="/post"
                            activeClassName="navActive"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-blue-400">
                            Blog
                    </NavLink>
                    </div>
                    <div className={`hamburger ${rotate ? "rotate" : " "}`} onClick={handleNavClick}>
                        <img src={navOpen ? hamburgerClose : hamburger} className={rotate ? "rotate" : " "} alt="hamburger" />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
