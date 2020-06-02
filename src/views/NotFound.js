import React from 'react';
import {Link} from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card.js'
const NotFound = props =>(
    <div className="NotFound">
        <PageHeader toggleNavBar={props.toggleNavBar} displayNav={props.displayNav}/>
        <hr/>
        <Card>
        <h1>Oops!<Link to="/">Head back to safety</Link></h1>
        </Card>
    </div>);

export default NotFound;