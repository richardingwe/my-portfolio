import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SingleBlog from './components/SingleBlog';
import Blog from './components/Blog';
import Project from './components/Project';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
import MiniNavBar from './components/MiniNavBar';
import Design from './components/Design';
import Code from './components/Code';

function App() {
	const [navOpen, setNavOpen] = useState(false);

	const handleClick = () => {
		setNavOpen(!navOpen);
	};
	return (
		<>
			<NavBar
				handleClick={handleClick}
				navOpen={navOpen}
				setNavOpen={setNavOpen}
			/>
			{navOpen && <MiniNavBar handleClick={handleClick} />}
			<WhatsApp />
			<Switch>
				<Route component={Home} path='/' exact />
				<Route component={About} path='/about' />
				<Route component={SingleBlog} path='/blog/:slug' />
				<Route component={Blog} path='/blog' />
				<Route component={Design} path='/projects/design' />
				<Route component={Code} path='/projects/code' />
				<Route component={Project} path='/projects' />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
