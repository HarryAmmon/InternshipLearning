import React from 'react';
import Styles from './Card.module.scss';

export default function Card(props){
    return(
        <article className={Styles.root}>
            {props.children}
        </article>
    );
}