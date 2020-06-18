import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.scss";
import AppContext from "./AppContext.jsx";

export default function NavBar(){    
    const context = useContext(AppContext);
    const [displayNav, setDisplayNav] = context.displayNavigation;

    return(
        <div>
            <nav className={displayNav ? Styles.root : Styles.hidden} >
                <ul>
                    <li><Link to="/" onClick={() => {setDisplayNav(false)}}>About Me</Link></li>
                    <li><Link to="/DotNetCore" onClick={() => setDisplayNav(false)}>.NET Core</Link></li>
                    <li><Link to="/DocMan" onClick={() => setDisplayNav(false)}>Document Management</Link></li>
                    <li><Link to="/FrontEnd" onClick={() => setDisplayNav(false)}>Front-end</Link></li>
                </ul>
            </nav>
        </div>
    );
}