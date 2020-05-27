import React from 'react';
import PageHeader from '../components/PageHeader';
import backgroundImage from '../images/FrontEndHeaderImage.jpg';
import Article from '../components/Article.js'
import NavBar from '../components/NavBar';

const FrontEnd = _ => (
    <div className="frontEndPage">
        <PageHeader 
            title="Front End"
            subTitle="JavaScript, React & CSS"
            backgroundImage={backgroundImage}
        />
        <hr/>
        <NavBar/>
        <Article
            title="Starting from scratch"
            subTitle="An intro to HTML & CSS"
            paragraphs={["some stuff about HTML5 elements","Some stuff about CSS"]}
        />
    </div>
);

export default FrontEnd