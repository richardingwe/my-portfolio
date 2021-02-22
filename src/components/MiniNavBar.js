import React from 'react';
import { NavLink } from 'react-router-dom';
import "./MiniNavBar.css";

const MiniNavBar = ({ handleClick }) => {
    return (
        <header className="MiniNavBar">
            <div className="Nav">
                <nav className="nav-items">
                    <div className="NavLinks" onClick={() => handleClick()}>
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
                </nav>
            </div>
        </header>
    );
};

export default MiniNavBar;