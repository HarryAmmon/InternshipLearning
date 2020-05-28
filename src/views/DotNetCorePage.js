import React from 'react';
import PageHeader from '../components/PageHeader';
import backgroundImage from '../images/DotNetPageHeader.jpg'
import Article from '../components/Article';
import NavBar from '../components/NavBar';
import ShowNavBarButton from '../components/ShowNavBarButton.js';

const DotNetCore = _ => (
    <div className="DotNetCorePage">
        <PageHeader 
            title=".NET Core"
            subTitle="Console, WebAPI & MVC apps'"
            backgroundImage={backgroundImage}
        />
        <hr/>
        <NavBar />
        {/* The state of the Nav bar needs to be updated by the button. When the button is clicked it should call a function that changes the class of the navbar */}
        <ShowNavBarButton /> 
        <Article
            title="An intro to .NET Core"
            paragraphs={["talking about .NET Core","say about what different to .NET Framework"]}
        />
        <Article
            title="Coding Kata"
            subTitle="Bowling"
            paragraphs={["Coding katas are completed to help hone your programming skills. They are talked about by Robert Martin in 'The Clean Coder'.","I completed the Bowling Kata"]}
        />
    </div>
);

export default DotNetCore;