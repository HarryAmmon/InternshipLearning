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
                <Article title="Starting from Scratch">
                    <p>During my first year at university I completed a module called 'An Introduction to Web Development'. I learnt about HTML5 tags, some simple CSS and JavaScript that allowed me to manipulate the DOM. For my assessment, I created a static site to demonstrate what I knew about HTML5 tags and CSS. The site was designed to be responsive and used media queries to achieve this. Whilst the site was functional it was developed in quite an old fashion way.</p>
                    <p>My knowledge of JavaScript was also very basic and I was only taught how to manipulate the DOM. There wasn't even a nod towards ay JS Frameworks or libraries.</p>
                    <p>For me to remove old web development habits and to ensure no gaps in my knowledge, I am starting from square one and assuming I have zero knowledge about web development. There is lots to learn.</p>
                </Article>
            </Card>
            <Card>
                <Article title="Big Picture" subTitle="Assume nothing">
                    <p>The first stop in my tour of web development is some big picture stuff.</p>
                </Article>
            </Card>
        </div>
    </div>
);

export default FrontEnd