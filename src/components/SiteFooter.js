import React from 'react';
import { faGithub, faTwitter,} from '@fortawesome/free-brands-svg-icons'
import Copyright from './Copyright.js';
import Styles from './SiteFooter.module.css';
import SocialButton from './SocialButton.js';

const date= new Date();

export default function Footer(){
    return(
        <footer className={Styles.root}>
            <hr className={Styles.line}/>
            <div className={Styles.footerContent}>
                <Copyright year={date.getFullYear()} />
                <div className={Styles.socialMedia}>
                    <SocialButton url="https://github.com/HarryAmmon" name={"GitHub"} />
                    <SocialButton url="https://twitter.com/harry_a99" name={"Twitter"} />
                    <SocialButton url="https://linkedin.com/in/harry-ammon-3a1995150" name={"LinkedIn"} />
                </div>
            </div>
        </footer>
    );
}