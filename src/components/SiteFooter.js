import React from 'react';
import Copyright from './Copyright.js';
import Styles from './SiteFooter.module.scss';
import SocialButton from './SocialButton.js';


export default function Footer({date= new Date()}){
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