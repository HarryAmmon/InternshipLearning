import React from 'react';
import Styles from './Article.module.scss';

export default function Article(props){
    return(
        <article className={Styles.root}>
            <header>
                <h1 className={Styles.title}>{props.title}</h1>
                <h2 className={Styles.subTitle}>{props.subTitle}</h2>
            </header>
            <main className={Styles.main}>
                {props.children}
            </main>
            <footer>
                <p>{props.dateWritten}</p>
            </footer>
        </article>
    );
}