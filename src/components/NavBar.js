import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-black text-4xl font-bold cursive tracking-widest">
                        RUI
                    </NavLink>
                    <NavLink
                        to="/post"
                        activeClassName="text-red-100 bg-blue-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black">
                        Blog Posts
                    </NavLink>
                    <NavLink
                        to="/project"
                        activeClassName="text-red-100 bg-blue-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black">
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="text-red-100 bg-blue-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-black">
                        About Me
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
