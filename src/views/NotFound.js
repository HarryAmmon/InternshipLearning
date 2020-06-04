import React from 'react';
import {Link} from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card.js';
import Styles from './Content.module.scss';

const NotFound = props =>(
    <div className="NotFound">
        <PageHeader title="404" subTitle="Not Found" toggleNavBar={props.toggleNavBar} displayNav={props.displayNav}/>
        <hr/>
        <div className={Styles.root}>
            <Card>
                <h1>Oops!<Link to="/">Head back to safety</Link></h1>
            </Card>
        </div>
    </div>);

export default NotFound;