import React, { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import Styles from "./Content.module.scss";
import Article from "../components/Article.jsx";
import NextPage from "../components/NextPage.jsx";
import NavBar from "../components/NavBar.jsx";
import { Hr, P } from "../components/Typography/Typography.jsx";

export default function DotNetCorePage(props) {
  return (
    <div className={Styles.root}>
      <PageHeader title=".NET Core" subTitle="Back to basics" />
      <Hr />
      <NavBar />
      <Hr />
      <Card>
        <Article title="Introduced to C#" subTitle="August 2019">
          <P>
            talking about .NET Core. Adding some more text to ensure that the
            width is correct, probably going to change the width
          </P>
          <P>say about what different to .NET Framework</P>
        </Article>
      </Card>
      <Card>
        <Article title="Coding Kata" subTitle="Bowling">
          <P>
            Coding katas are completed to help hone your programming skills.
            They are talked about by Robert Martin in 'The Clean Coder'.
          </P>
          <P>I completed the Bowling Kata that can be found on my GitHub.</P>
        </Article>
      </Card>
      <Card>
        <Article title="Employee Pay Solution"></Article>
      </Card>
      <Card>
        <Article title="Interfaces"></Article>
      </Card>
      <Card>
        <Article title="Testing"></Article>
      </Card>
      <Card>
        <Article title="Console App"></Article>
      </Card>
      <Card>
        <Article title="Web API"></Article>
      </Card>
      <Card>
        <Article title="MVC App"></Article>
      </Card>
      <Card>
        <Article title="Object Relation Mapper" subTitle="EF Core and Dapper">
          <P>
            As part of the Employee Pay Project I needed to implement an Object
            Relation Mapper (ORM) such as EF Core or Dapper. This would allow me
            to interact with a database that stored Employee information instead
            the information being stored in a JSON file.
          </P>
          <NextPage
            location="/DocMan"
            content="Document Management Programme"
          />
        </Article>
      </Card>
    </div>
  );
}
