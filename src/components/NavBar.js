import React from 'react';
import { NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";

export default function NavBar(){
    return(
        <nav className={Styles.root}>
            <NavLink to="/" exact >Home</NavLink>
            <NavLink to="/DotNetCore" >DotNetCore</NavLink>
            <NavLink to="/DocMan" >DocMan</NavLink>
            <NavLink to="/FrontEnd">FrontEnd</NavLink>
        </nav>
    );
}