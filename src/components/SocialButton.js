import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './SocialButton.module.css';

export default function SocialButton(props){
    return(
        <div>           
            <a target="_blank" href={props.url}>
                <button className={Styles.root}>
                    <FontAwesomeIcon icon={props.icon} />
                </button>
            </a>
        </div>
    );
}