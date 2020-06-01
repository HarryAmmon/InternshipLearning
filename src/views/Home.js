import React from 'react';
import Header from '../components/SiteHeader.js';
import AboutMe from '../components/AboutMe.js';

const Home = props =>(
    
    <div className="homePage">
    {console.log("home props: ", props)}
        <Header toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>
        <div id="content">
            <AboutMe />
        </div>
    </div>
);

export default Home;