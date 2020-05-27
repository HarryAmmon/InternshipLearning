import React from 'react';
import Styles from './SiteHeader.module.css';


export default function Header(){
    return(
        <header className={Styles.root}>             
                <h1>Internship Learning</h1>
                <p className={Styles.subtitle}>Documenting my learning journey</p>
                <a href="#content">#</a>
        </header>
    );
}