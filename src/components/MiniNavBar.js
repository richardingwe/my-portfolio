import React from 'react';
import { NavLink } from 'react-router-dom';
import "./MiniNavBar.css";
import { motion } from "framer-motion";

const MiniNavBar = ({ handleClick }) => {
    return (
        <header className="MiniNavBar">
            <motion.div
                initial={{ y: "-50vh" }}
                transition={{ type: "spring", stiffness: 300 }}
                animate={{ y: 0 }}
                className="Nav"
            >
                <nav className="nav-items">
                    <div className="NavLinks" onClick={() => handleClick()}>
                        <NavLink
                            to="/about"
                            activeClassName="navActive"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 text-bold hover:text-blue-400">
                            About Me.
                        </NavLink>
                        <NavLink
                            to="/project"
                            activeClassName="navActive"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-blue-400">
                            Projects.
                        </NavLink>
                        <NavLink
                            to="/blog"
                            activeClassName="navActive"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-blue-400">
                            Blog.
                        </NavLink>
                    </div>
                </nav>
            </motion.div>
        </header>
    );
};

export default MiniNavBar;