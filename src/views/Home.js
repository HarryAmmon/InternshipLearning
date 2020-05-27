import React from 'react';
import Header from '../components/SiteHeader.js';
import AboutMe from '../components/AboutMe.js';
import NavBar from '../components/NavBar.js';

const Home = _ =>(
    <div className="homePage">
        <Header/>
        <NavBar/>
        <div id="content">
            <AboutMe />
        </div>
    </div>
);

export default Home;