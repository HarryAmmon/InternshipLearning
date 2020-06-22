import React from 'react';
import Styles from "ExternalLink.module.scss"

export default function ExternalLink(){
    return(<a className={Styles.root} href={props.link}>{props.children}</a>)
}