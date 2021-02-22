import React from 'react';
import { NavLink } from 'react-router-dom';
// import { SocialIcon } from "react-social-icons";
import Logo from "../Rui.svg";
import hamburger from "../hamburger.svg";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header className="NavBar">
            <div className="Nav">
                <nav className="nav-items">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white" className="">

                        <img src={Logo} alt="rui logo" />
                    </NavLink>
                    <div className="NavLinks">
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
                    <div className="hamburger">
                        <img src={hamburger} alt="rui logo" />
                    </div>
                </nav>
                {/* <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/RichardIngwe?s=09" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://behance.net/richardingwe" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://linkedin.com/in/richard-ingwe-9a91a5190" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://wa.me/message/FI6OFAJRBKVMI1" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div> */}
            </div>
        </header>
    );
};

export default NavBar;
