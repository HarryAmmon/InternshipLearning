import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card.js'


const FrontEnd = props => (
    <div className="frontEndPage">
        <PageHeader title="Front-end" subTitle="JavaScript, CSS & React" toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>    
        <hr/>
        <Card>
            <h1>Starting from scratch</h1>
            <h2>An intro to HTML & CSS</h2>
            <p>some stuff about HTML5 elements</p>
            <p>Some stuff about CSS</p>
        </Card>
    </div>
);

export default FrontEnd