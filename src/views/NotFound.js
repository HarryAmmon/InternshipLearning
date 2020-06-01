import React from 'react';
import NavBar from '../components/NavBar';
import {Link} from 'react-router-dom';
import PageHeader from '../components/PageHeader';
const NotFound = props =>(
    <div className="NotFound">
        <PageHeader toggleNavBar={props.toggleNavBar} displayNav={props.displayNav}/>
        <hr/>
        <h1>Oops!<Link to="/">Head back to safety</Link></h1>
    </div>);

export default NotFound;