import React from 'react';
import Header from '../components/SiteHeader.js';
import AboutMe from '../components/AboutMe.js';

const Home = _ =>(
    <div className="homePage">
        <Header/>
        <main>
            <AboutMe />                
        </main>
    </div>
);

export default Home;