import React, {useState } from 'react';
import Styles from './App.module.scss';
import { Route, Switch } from 'react-router-dom';
import Home  from "../views/Home.jsx";
import DocumentManagement from '../views/DocumentManagement.jsx';
import FrontEnd from "../views/FrontEnd.jsx";
import DotNetCore from "../views/DotNetCorePage.jsx"
import NotFound from '../views/NotFound.jsx';
import Footer from './SiteFooter.jsx';

export default function App(){
    const [showNavBar, setShowNavBar] = useState(false);

    const ToggleNavBar = function(e){
        e.preventDefault();
        showNavBar ? setShowNavBar(false) : setShowNavBar(true);
    };

    const HideNavbar = function(e){
        setShowNavBar(false);
    }

    return(
        <div className={Styles.root} >     
            <Switch>
                <Route path="/" exact component={() => <Home toggleNavBar={ToggleNavBar} displayNav={showNavBar} hideNavBar={HideNavbar}/>} />
                <Route path="/DocMan" component={() => <DocumentManagement toggleNavBar={ToggleNavBar} displayNav={showNavBar} hideNavBar={HideNavbar}/>} />
                <Route path="/FrontEnd" component={() => <FrontEnd toggleNavBar={ToggleNavBar} displayNav={showNavBar} hideNavBar={HideNavbar} />}/>
                <Route path="/DotNetCore" component={() => <DotNetCore toggleNavBar={ToggleNavBar} displayNav={showNavBar} hideNavBar={HideNavbar} />}/>
                <Route component={() => <NotFound toggleNavBar={ToggleNavBar} displayNav={showNavBar} hideNavBar={HideNavbar} />}/>    
            </Switch>
            <Footer />
        </div>
    );
}