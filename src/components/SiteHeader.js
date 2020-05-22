import React from 'react';
import Styles from './SiteHeader.module.css';
import NavBar from './NavBar';

export default function Header(){
    return(
        <header className={Styles.root}>             
                <h1>Internship Learning</h1>
                <p className={Styles.subtitle}>Documenting my learning journey</p>
        </header>
    );
}