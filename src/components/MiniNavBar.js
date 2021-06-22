import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/MiniNavBar.css';

const MiniNavBar = ({ handleClick }) => {
	return (
		<header className='MiniNavBar'>
			<motion.div
				initial={{ y: '-50vh' }}
				transition={{ type: 'spring', stiffness: 300 }}
				animate={{ y: 0 }}
				className='Nav'
			>
				<nav className='nav-items'>
					<div className='NavLinks' onClick={() => handleClick()}>
						<NavLink
							to='/about'
							activeClassName='navActive'
							className='inline-flex items-center'
						>
							About Me.
						</NavLink>
						<NavLink
							to='/projects'
							activeClassName='navActive'
							className='inline-flex items-center'
						>
							Projects.
						</NavLink>
						<NavLink
							to='/blog'
							activeClassName='navActive'
							className='inline-flex items-center'
						>
							Blog.
						</NavLink>
					</div>
				</nav>
			</motion.div>
		</header>
	);
};

export default MiniNavBar;
