import React from 'react';
import PageHeader from '../components/PageHeader';
import BackgroundImage from '../images/FrontEndHeaderImage.jpg';
import Article from '../components/Article.js'
import NavBar from '../components/NavBar';

const FrontEnd = props => (
    
    <div className="frontEndPage">
        {console.log("frontend props: ", props)}
        <PageHeader backgroundImage = {BackgroundImage} toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>    
        <h1>Front-end</h1>
        <h2>JavaScript, CSS & React</h2>
        <Article
            title="Starting from scratch"
            subTitle="An intro to HTML & CSS"
            paragraphs={["some stuff about HTML5 elements","Some stuff about CSS"]}
        />
    </div>
);

export default FrontEnd