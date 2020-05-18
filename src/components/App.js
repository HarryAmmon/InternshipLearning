import React from 'react';
import Styles from './App.module.css';

export default function App(){
    return(
        <div className={Styles.root}>
            <h1 className={Styles.title}>Internship Learning</h1>
            <p className={Styles.subtitle}>A site documenting my learning journey</p>
        </div>
    );
}