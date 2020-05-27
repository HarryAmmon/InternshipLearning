import React from 'react';
import PageHeader from '../components/PageHeader';
import backgroundImage from '../images/DotNetPageHeader.jpg'
import Article from '../components/Article';
import NavBar from '../components/NavBar';

const DotNetCore = _ => (
    <div className="DotNetCorePage">
        <PageHeader 
            title="Front End"
            subTitle="JavaScript, React & CSS"
            backgroundImage={backgroundImage}
        />
        <hr/>
        <NavBar />
        <Article
            title="An intro to .NET Core"
            paragraphs={["talking about .NET Core","say about what different to .NET Framework"]}
        />
    </div>
);

export default DotNetCore;