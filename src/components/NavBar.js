import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="bg-blue-600">
            <div>
                <nav>
                    <NavLink to="/" exact>
                        Rui
                    </NavLink>
                    <NavLink to="/post">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project">
                        Projects
                    </NavLink>
                    <NavLink to="/about">
                        About Me
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
