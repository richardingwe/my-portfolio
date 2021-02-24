import React, { useState } from 'react';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import Logo from "../Rui.svg";
import hamburger from "../hamburger.svg";
import hamburgerClose from "../hamburgerClose.svg";
import "./NavBar.css";

const NavBar = ({ handleClick, navOpen, setNavOpen }) => {
    const [rotate, setRotate] = useState(false);
    const handleNavClick = () => {
        handleClick();
        setRotate(true);
        setTimeout(() => {
            setRotate(false);
        }, 2000);
    };

    const handleLogoClick = () => {
        navOpen && setNavOpen(false);
    };
    return (
        <header className="NavBar" style={{ position: `${navOpen ? "fixed" : "absolute"}` }}>
            <div className="Nav">
                <nav className="nav-items">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white" className="">

                        <motion.img
                            onClick={handleLogoClick}
                            initial={{ x: "-10vw", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            src={Logo}
                            alt="rui logo" />
                    </NavLink>
                    <motion.div
                        initial={{ x: "10vw", opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="NavLinks" >
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
                    </motion.div>
                    <div className={`hamburger ${rotate ? "rotate" : " "}`} onClick={handleNavClick}>
                        <motion.img
                            initial={{ x: "10vw", opacity: 0 }}
                            transition={{ delay: 0.5 }}
                            animate={{ x: 0, opacity: 1 }}
                            src={navOpen ? hamburgerClose : hamburger}
                            className={rotate ? "rotate" : " "}
                            alt="hamburger" />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
