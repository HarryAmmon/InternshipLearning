import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card.js';
import Styles from './Content.module.scss';
import Article from '../components/Article.js';

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
        </div>
    </div>
    );
};