import React from 'react';
import PageHeader from '../components/PageHeader.js';
import BackgroundImage from '../images/DocManHeaderImage.jpg';
import Article from '../components/Article.js';

const DocumentManagement = _ => (
    <div className="DocManPage">
        <PageHeader
            title = "DocMan"
            subTitle ="A lesson in refactoring"
            backgroundImage = {BackgroundImage}
        />
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