import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.scss";



export default function NavBar(props){
    
    const [display, setDisplay] = useState(false);

    
    return(
    <nav className={display ? Styles.root : Styles.hidden} >
        <ul>
            <li><Link to="/" onClick={props.hideNavBar}>About Me</Link></li>
            <li><Link to="/DotNetCore" onClick={props.hideNavBar}>.NET Core</Link></li>
            <li><Link to="/DocMan" onClick={props.hideNavBar}>Document Management</Link></li>
            <li><Link to="/FrontEnd" onClick={props.hideNavBar}>Front-end</Link></li>
        </ul>
    </nav>
    );
}