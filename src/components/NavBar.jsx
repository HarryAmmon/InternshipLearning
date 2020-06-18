import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.scss";



export default function NavBar(){
    
    const [display, setDisplay] = useState(true);


    useEffect(() => {
        console.log(`NavBar mounted `);
        return () => {
            console.log(`Navbar unmounted `);
        }
    },[display]);

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
        <button onClick={() => setDisplay(display ? false : true)}>Press me!</button>
    </div>
    );
}