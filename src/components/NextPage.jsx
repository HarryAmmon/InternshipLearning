import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './NextPage.module.scss';

const NextPage = props =>(
    <Link className={Styles.root} to={{pathname:props.location}}>{props.content}</Link>
)

export default NextPage;