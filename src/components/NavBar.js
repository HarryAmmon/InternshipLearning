import React from 'react';
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.scss";



export default function NavBar(){
    return(
        <nav className={Styles.root}>
            <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/DotNetCore" >.NET Core</Link></li>
                <li><Link to="/DocMan" >Document Management</Link></li>
                <li><Link to="/FrontEnd">Front-end</Link></li>
            </ul>
        </nav>
    );
}