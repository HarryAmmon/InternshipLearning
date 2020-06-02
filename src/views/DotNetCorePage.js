import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card.js';

export default function DotNetCorePage(props){
    return(
    <div className="DotNetCorePage">
        <PageHeader title=".NET Core" subTitle="Back to basics" toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>
        <hr/>
        <Card>
            <h1>An intro to .NET Core</h1>
            <p>talking about .NET Core</p><p>say about what different to .NET Framework</p>
        </Card>
        <Card>
            <h1>Coding Kata</h1>
            <h2>Bowling</h2>
            <p>Coding katas are completed to help hone your programming skills. They are talked about by Robert Martin in 'The Clean Coder'.</p><p>I completed the Bowling Kata</p>
        </Card>
    </div>
    );
};