import React from 'react';
import PageHeader from '../components/PageHeader';
import backgroundImage from '../images/DotNetPageHeader.jpg'
import Article from '../components/Article';

const DotNetCore = _ => (
    <div className="DotNetCorePage">
        <PageHeader 
            title="Front End"
            subTitle="JavaScript, React & CSS"
            backgroundImage={backgroundImage}
        />
        <Article
            title="An intro to .NET Core"
            paragraphs={["talking about .NET Core","say about what different to .NET Framework"]}
        />
    </div>
);

export default DotNetCore;