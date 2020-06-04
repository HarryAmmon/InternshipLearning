import React from 'react';
import Styles from './Card.module.scss';

export default function Card(props){
    return(
        <div className={Styles.root}>
            {props.children}
        </div>
    );
}