import React from 'react';
import Header from '../components/Header.js';
import AboutMe from '../components/AboutMe.js';
import Footer from '../components/Footer.js';

const Home = _ =>(
    <div className="homePage">
        <Header />
        <main>
            <AboutMe />                
        </main>
        <Footer />
    </div>
);

export default Home;