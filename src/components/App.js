import React from 'react';
import Styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import Home  from "../views/Home.js";
import DocumentManagement from '../views/DocumentManagement.js';
import FrontEnd from "../views/FrontEnd.js";
import DotNetCore from "../views/DotNetCorePage.js"
import NotFound from '../views/NotFound';
import NavBar from './NavBar';
import Footer from '../components/SiteFooter';

export default function App(){
    return(
        <div className={Styles.root}>       
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/DocMan" component={DocumentManagement}/>
                <Route path="/FrontEnd" component={FrontEnd}/>
                <Route path="/DotNetCore" component={DotNetCore}/>
                <Route component={NotFound} />    
            </Switch>
            <Footer />
        </div>
    );
}