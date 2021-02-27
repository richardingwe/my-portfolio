import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from './components/NavBar';
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
    <BrowserRouter>
      <NavBar handleClick={handleClick} navOpen={navOpen} setNavOpen={setNavOpen} />
      {navOpen && <MiniNavBar handleClick={handleClick} />}
      <WhatsApp />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Design} path="/project/design" />
        <Route component={Code} path="/project/code" />
        <Route component={Project} path="/project" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;


