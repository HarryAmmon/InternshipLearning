import React from 'react';
import Styles from './App.module.css';
import Footer from './Footer.js';
import Header from './Header.js';
import AboutMe from './AboutMe.js';

export default function App(){
    return(
        <div className={Styles.root}>
            <Header />
            <main>
            <AboutMe />                
            </main>
            <Footer />
        </div>
    );
}