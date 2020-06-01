import React from 'react';
import PageHeader from '../components/PageHeader.js';
import BackgroundImage from '../images/DocManHeaderImage.jpg';
import Article from '../components/Article.js';
import NavBar from '../components/NavBar.js';

const DocumentManagement = props => (
    <div className="DocManPage">
        <PageHeader backgroundImage = {BackgroundImage} toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>
        <hr/>
        <h1>DocMan</h1>
        <h2>A lesson in refactoring</h2>
        <Article
            title="Planning Day"
            subTitle="A sense of scale"
            paragraphs={['some text','some different text']}
        />
        <Article
            title="SharePoint oAuth"
            paragraphs={['some more text','writing about the planning day']}
        /> 
        <Article
            title="Creating PoCs"
            paragraphs={['writing about proof of concepts']}
        />
        <Article
            title="Ways of working"
            subTitle="Agile & Azure DevOps"
            paragraphs={['writing about agile','sprint planning','tracking tasks','daily scrum']}
        />
    </div>
);

export default DocumentManagement;