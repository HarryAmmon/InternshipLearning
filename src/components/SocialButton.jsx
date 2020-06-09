import React from 'react';
import Styles from './SocialButton.module.scss';

export default function SocialButton(props){
    return(        
        <a className={Styles.root} target="_blank" href={props.url}>
            {props.name}
        </a>
    );
}