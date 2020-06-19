import React from 'react';
import Header from '../components/SiteHeader.jsx';
import AboutMe from '../components/AboutMe.jsx';
import Card from '../components/Card.jsx';
import Styles from './Home.module.scss';
import List from '../components/List.jsx';

const Home = props =>(
    <div className="homePage">
        <Header toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>
        <hr/>
        <div className={Styles.root} id="content">
            <Card>
                <h3>Currently Learning</h3>
                <List listItems={
                    [
                        'React',
                        'Jest',
                        'SASS',
                        'JavaScript',
                        'TypeScript',
                    ]
                }/>
            </Card>
            <AboutMe />
            
        </div>
    </div>
);

export default Home;
