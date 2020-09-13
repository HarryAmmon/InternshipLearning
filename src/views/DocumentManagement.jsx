import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import Styles from "./Content.module.scss";
import Article from "../components/Article.jsx";
import NextPage from "../components/NextPage.jsx";
import { Hr, P } from "../components/Typography/Typography.jsx";
import NavBar from "../components/NavBar.jsx";

const DocumentManagement = (props) => (
  <div className={Styles.root}>
    <PageHeader title="Document Management" subTitle="" />
    <Hr />
    <NavBar />
    <Hr />
    <div className={Styles.root}>
      <Card>
        <Article title="Planning Day" subTitle="A sense of scale">
          <P>
            Once every 3 sprints, the whole programme would meet to discuss and
            plan the next 3 sprints. It was a chance to plan user stories and
            tasks away from distractions in the office. We mapped dependencies
            between projects, completed team building exercises and drank cheap
            coffee.
          </P>
          <P></P>
        </Article>
      </Card>
      <Card>
        <Article title="Ways of working" subTitle="Agile & Azure DevOps">
          <P>
            This was my first time working on a project for TPR. The project was
            to be run following the Agile methodology. We had daily stand ups
            and completed sprint planning at the end of each sprint.
          </P>
          <P>
            This was also the first time using a Azure DevOps to manage tasks.
            Azure DevOps allows you as a team to create cards for the full Scrum
            hierarchy from Epics to Tasks. They can have time estimates and
            dependencies linked. Developers use this to track their work and
            completes a part of the CI process.
          </P>
          <NextPage location="/FrontEnd" content="Learning Front-end" />
        </Article>
      </Card>
      <Card>
        <Article title="Database challenges"></Article>
      </Card>
      <Card>
        <Article title="Doing the oAuth Dance"></Article>
      </Card>
      <Card>
        <Article title="SharePoint CSOM API"></Article>
      </Card>
      <Card>
        <Article title="Refactoring"></Article>
      </Card>
      <Card>
        <Article title="Leaving the workstream"></Article>
      </Card>
    </div>
  </div>
);

export default DocumentManagement;
