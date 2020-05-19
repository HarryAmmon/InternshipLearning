import React from 'react';
import Styles from './Header.module.css';

export default function Header(){
    return(
        <header className={Styles.root}>
                <h1>Internship Learning</h1>
                <p className={Styles.subtitle}>A site documenting my learning journey</p>
        </header>
    );
}