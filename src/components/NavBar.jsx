import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.scss";



export default function NavBar(){
    
    const [display, setDisplay] = useState(true);

    return(
    <div>
        <nav className={display ? Styles.root : Styles.hidden} >
            <ul>
                <li><Link to="/" onClick={() => {setDisplay(false); console.log("onClick Link: '/' pressed")}}>About Me</Link></li>
                <li><Link to="/DotNetCore" onClick={() => setDisplay(false)}>.NET Core</Link></li>
                <li><Link to="/DocMan" onClick={() => setDisplay(false)}>Document Management</Link></li>
                <li><Link to="/FrontEnd" onClick={() => setDisplay(false)}>Front-end</Link></li>
            </ul>
        </nav>
        <button onClick={() => setDisplay(state => !state)}>Press me!</button>
    </div>
    );
}