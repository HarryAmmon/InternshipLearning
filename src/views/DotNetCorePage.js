import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import BackgroundImage from '../images/DotNetPageHeader.jpg'
import Card from '../components/Card.js';

export default function DotNetCorePage(props){
    

    return(<div className="DotNetCorePage">
        <PageHeader backgroundImage = {BackgroundImage} toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>
        <h1>DotNetCorePage</h1>
        <h2>Back to basics</h2>
        <Card
            title="An intro to .NET Core"
            paragraphs={["talking about .NET Core","say about what different to .NET Framework"]}
        />
        <Card
            title="Coding Kata"
            subTitle="Bowling"
            paragraphs={["Coding katas are completed to help hone your programming skills. They are talked about by Robert Martin in 'The Clean Coder'.","I completed the Bowling Kata"]}
        />
    </div>);
};