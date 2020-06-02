import React from 'react';
import PageHeader from '../components/PageHeader';
import BackgroundImage from '../images/FrontEndHeaderImage.jpg';
import Card from '../components/Card.js'


const FrontEnd = props => (
    
    <div className="frontEndPage">
        <PageHeader backgroundImage = {BackgroundImage} toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>    
        <h1>Front-end</h1>
        <h2>JavaScript, CSS & React</h2>
        <Card
            title="Starting from scratch"
            subTitle="An intro to HTML & CSS"
            paragraphs={["some stuff about HTML5 elements","Some stuff about CSS"]}
        />
    </div>
);

export default FrontEnd