import React from 'react';
import PageHeader from '../components/PageHeader.js';
import BackgroundImage from '../images/DocManHeaderImage.jpg';
import Card from '../components/Card.js';

const DocumentManagement = props => (
    <div className="DocManPage">
        <PageHeader backgroundImage = {BackgroundImage} toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>
        <hr/>
        <h1>DocMan</h1>
        <h2>A lesson in refactoring</h2>
        <Card
            title="Planning Day"
            subTitle="A sense of scale"
            paragraphs={['some text','some different text']}
        />
        <Card
            title="SharePoint oAuth"
            paragraphs={['some more text','writing about the planning day']}
        /> 
        <Card
            title="Creating PoCs"
            paragraphs={['writing about proof of concepts']}
        />
        <Card
            title="Ways of working"
            subTitle="Agile & Azure DevOps"
            paragraphs={['writing about agile','sprint planning','tracking tasks','daily scrum']}
        />
    </div>
);

export default DocumentManagement;