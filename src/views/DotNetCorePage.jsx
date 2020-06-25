import React, { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Card from '../components/Card.jsx';
import Styles from './Content.module.scss';
import Article from '../components/Article.jsx';
import NextPage from '../components/NextPage.jsx';

export default function DotNetCorePage(props){
    return(
    <div>
        <PageHeader title=".NET Core" subTitle="Back to basics" toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>
        <hr/>
        <div className={Styles.root}>
            <Card>
                <Article title="An intro to .NET Core">
                    <p>talking about .NET Core. Adding some more text to ensure that the width is correct, probably going to change the width</p>
                    <p>say about what different to .NET Framework</p>
                </Article>
            </Card>
            <Card>
                <Article title="Coding Kata" subTitle="Bowling">
                    <p>Coding katas are completed to help hone your programming skills. They are talked about by Robert Martin in 'The Clean Coder'.</p>
                    <p>I completed the Bowling Kata that can be found on my GitHub.</p>
                </Article>
            </Card>
            <Card>
                <Article title="Employee Pay Solution">

                </Article>
            </Card>
            <Card>
                <Article title="Interfaces">
                    
                </Article>
            </Card>
            <Card>
                <Article title="Testing">

                </Article>
            </Card>
            <Card>
                <Article title="Console App">

                </Article>
            </Card>
            <Card>
                <Article title="Web API">

                </Article>
            </Card>
            <Card>
                <Article title="MVC App">

                </Article>
            </Card>
            <Card>
                <Article title="Object Relation Mapper" subTitle="EF Core and Dapper">
                    <p>As part of the Employee Pay Project I needed to implement an Object Relation Mapper (ORM) such as EF Core or Dapper. This would allow me to interact with a database that stored Employee information instead the information being stored in a JSON file.</p>
                    <NextPage location="/DocMan" content="Document Management Programme"/>
                </Article>
            </Card>
        </div>
    </div>
    );
};