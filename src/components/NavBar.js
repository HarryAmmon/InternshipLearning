import React from 'react';
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.scss";



export default function NavBar(props){
    console.log("NavBar props: ", props);
    return(
            <nav className={props.display? Styles.root: Styles.hidden}>
            <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/DotNetCore" onClick={props.hideNavBar}>.NET Core</Link></li>
                <li><Link to="/DocMan" onClick={props.hideNavBar}>Document Management</Link></li>
                <li><Link to="/FrontEnd" onClick={props.hideNavBar}>Front-end</Link></li>
            </ul>
        </nav>
        );
}