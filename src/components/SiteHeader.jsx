import React from 'react';
import Styles from './SiteHeader.module.scss';
import MenuButton from './MenuButton.jsx';

export default function Header(props){
    return(
        <div>
        <header className={Styles.root}>
            <MenuButton onClick={props.toggleNavBar}/>
            <div>             
                <h1>Internship Learning</h1>
                <p className={Styles.subtitle}>Documenting my learning journey</p>
            </div>
        </header>
        <hr/>
       
        </div>
    );
}