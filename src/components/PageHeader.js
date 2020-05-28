import React from 'react';
import Styles from './PageHeader.module.scss';

export default function PageHeader(props){
    return(
        <div 
            className={Styles.root} 
            style={{ backgroundImage: `url(${props.backgroundImage})`}}
        >
            <h1 className={Styles.title}>{props.title}</h1>
            <h2 className={Styles.subTitle}>{props.subTitle}</h2>
        </div>
    );
}