import React from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Card from '../components/Card.jsx';
import Styles from './Content.module.scss';
import Article from '../components/Article.jsx';

const FrontEnd = props => (
    <div className="frontEndPage">
        <PageHeader title="Front-end" subTitle="JavaScript, CSS & React" toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>    
        <hr/>
        <div className={Styles.root}>
            <Card>
                <Article title="Starting from Scratch" subTitle="An intro to HTML & CSS">
                    <p>During my first year at uni I completed a module called 'An Introduction to Web Development'. In this module I learnt about HTML5 tags, some simple CSS and JavaScript that allowed me to manipulate the DOM.</p>
                </Article>
            </Card>
        </div>
    </div>
);

export default FrontEnd