import React from 'react';
import Header from '../components/Header.js';
import AboutMe from '../components/AboutMe.js';

const Home = _ =>(
    <div className="homePage">
        <Header />
        <main>
            <AboutMe />                
        </main>
        
    </div>
);

export default Home;