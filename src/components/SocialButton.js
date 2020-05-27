import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './SocialButton.module.css';

export default function SocialButton(props){
    return(        
        <a className={Styles.root} target="_blank" href={props.url}>
            {props.name}
        </a>
    );
}