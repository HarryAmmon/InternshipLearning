import React from 'react';
import Styles from './Article.module.scss';

export default function Article(props){
    return(
        <article className={Styles.root}>
            <header>
                <h2 className={Styles.title}>{props.title}</h2>
                <h3 className={Styles.subTitle}>{props.subTitle}</h3>
            </header>
            <main>
                {props.paragraphs.map(paragraph => <p key={paragraph.length}>{paragraph}</p>)}
            </main>
        </article>
    );
}