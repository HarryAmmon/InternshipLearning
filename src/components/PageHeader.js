import React, {useState} from 'react';
import Styles from './PageHeader.module.scss';
import MenuButton from './MenuButton';
import NavBar from './NavBar';

export default function PageHeader(props){
    return(
        <div>
            <div className={Styles.root}>
            <h1 className={Styles.title}>{props.title}</h1>
            <h2 className={Styles.subTitle}>{props.subTitle}</h2>
                <MenuButton onClick={props.toggleNavBar}/>
            </div>
            <hr/>
            <NavBar display={props.displayNav} hideNavBar={props.hideNavBar} />         
        </div>
    );
}