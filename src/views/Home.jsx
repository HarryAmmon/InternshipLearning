import React from 'react';
import Header from '../components/SiteHeader.jsx';
import AboutMe from '../components/AboutMe.jsx';
import Card from '../components/Card.jsx';
import Styles from './Home.module.scss';

const Home = props =>(
    <div className="homePage">
        <Header toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>
        <hr/>
        <div className={Styles.root} id="content">
            <Card>
                <h3>Currently Learning</h3>
                <ul>
                    <li>React</li>
                    <li>Jest</li>
                    <li>SASS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                </ul>
            </Card>
            <AboutMe />
            
        </div>
    </div>
);

export default Home;
