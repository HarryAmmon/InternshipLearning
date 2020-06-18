import React, {useState } from 'react';
import Styles from './App.module.scss';
import { Route, Switch } from 'react-router-dom';
import Home  from "../views/Home.jsx";
import DocumentManagement from '../views/DocumentManagement.jsx';
import FrontEnd from "../views/FrontEnd.jsx";
import DotNetCore from "../views/DotNetCorePage.jsx"
import NotFound from '../views/NotFound.jsx';
import Footer from './SiteFooter.jsx';
import NavBar from './NavBar.jsx';
import AppContext from './AppContext.jsx';

export default function App(){
    const displayNavigation = useState(false);
    return(
        <div className={Styles.root} >
            <AppContext.Provider value = {{ displayNavigation }}>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/DocMan" component={() => <DocumentManagement />} />
                    <Route path="/FrontEnd" component={() => <FrontEnd  />}/>
                    <Route path="/DotNetCore" component={() => <DotNetCore  />}/>
                    <Route component={() => <NotFound />}/>    
                </Switch>
                <Footer />
            </AppContext.Provider>
        </div>
    );
}