import React from 'react';
import PageHeader from '../components/PageHeader';
import BackgroundImage from '../images/FrontEndHeaderImage.jpg';
import Card from '../components/Card.js'


const FrontEnd = props => (
    <div className="frontEndPage">
        <PageHeader backgroundImage = {BackgroundImage} toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>    
        <hr/>
        <h1>Front-end</h1>
        <h2>JavaScript, CSS & React</h2>
        <Card>
            <h1>Starting from scratch</h1>
            <h2>An intro to HTML & CSS</h2>
            <p>some stuff about HTML5 elements</p>
            <p>Some stuff about CSS</p>
        </Card>
    </div>
);

export default FrontEnd