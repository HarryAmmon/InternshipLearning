import React from 'react';
import PageHeader from '../components/PageHeader.js';
import Card from '../components/Card.js';

const DocumentManagement = props => (
    <div className="DocManPage">
        <PageHeader title="DocMan" subTitle="A lesson in refactoring" toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>
        <hr/>
        <Card>
            <h1>Planning Day</h1>
            <h2>A sense of scale</h2>
            <p>some text</p><p>some different text</p>
        </Card>
        <Card>
            <h1>SharePoint oAuth</h1>
            <p>some more text</p><p>writing about the planning day</p>
        </Card>
        <Card>
            <h1>Creating PoCs</h1>
            <p>writing about proof of concepts</p>
        </Card>
        <Card>
            <h1>Ways of working</h1>
            <h2>Agile & Azure DevOps</h2>
            <p>writing about agile</p><p>sprint planning','tracking tasks</p><p>daily scrum</p>
        </Card>
    </div>
);

export default DocumentManagement;