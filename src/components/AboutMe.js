import React from 'react';
import Styles from './AboutMe.module.css';

export default function AboutMe(){
    return(
        <article className={Styles.root}>
            <h2>About Me!</h2>
            <b>👋</b>
            <p>Hi! I'm Harry and I'm a software developer. I currently am an Intern for The Pensions Regulator and have spent the last year absorbing as much knowledge as possible!</p>
            <p>Based in South-East England, I can be found cooking, cycling or in a beer garden!</p>
            <p>I have learnt a lot over the last year and here I will talk about what I have learnt, projects I have been involved with and challenges faced!</p>
        </article>
    );
}