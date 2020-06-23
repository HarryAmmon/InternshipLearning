import React from 'react';
import Styles from "./ExternalLink.module.scss"

export default function ExternalLink(props){
    return(<a className={Styles.root} href={props.link}>{props.children}</a>)
}