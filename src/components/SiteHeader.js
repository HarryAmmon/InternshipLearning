import React from 'react';
import Styles from './SiteHeader.module.scss';
import ShowNavBarButton from './ShowNavBarButton';
import NavBar from './NavBar';

export default function Header(props){
    return(
        <div>
        <header className={Styles.root}>
            <ShowNavBarButton onClick={props.toggleNavBar}/>
            <div>             
                <h1>Internship Learning</h1>
                <p className={Styles.subtitle}>Documenting my learning journey</p>
            </div>
            <a href="#content">#</a>
        </header>
        <hr/>
        <NavBar display={props.displayNav} hideNavBar={props.hideNavBar} />
        </div>
    );
}