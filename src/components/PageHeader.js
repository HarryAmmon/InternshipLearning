import React, {useState} from 'react';
import Styles from './PageHeader.module.scss';
import ShowNavBarButton from './ShowNavBarButton';
import NavBar from './NavBar';

export default function PageHeader(props){
    return(
        <div>
            <div 
                className={Styles.root} 
                style={{ backgroundImage: `url(${props.backgroundImage})`}}
            >
                <ShowNavBarButton onClick={props.toggleNavBar}/>
            </div>
            <hr/>
            <NavBar display={props.displayNav} hideNavBar={props.hideNavBar} />         
        </div>
    );
}