import React from 'react';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Copyright from './Copyright.js';
import styles from './Footer.module.css';
import SocialButton from './SocialButton.js';
const date= new Date();

export default function Footer(){
    return(
        <footer className={styles.root}>
            <Copyright year={date.getFullYear()} />
            <SocialButton url="https://github.com/HarryAmmon" icon={faGithub} />
            <SocialButton url="https://twitter.com/harry_a99" icon ={faTwitter} />
        </footer>
    );
}