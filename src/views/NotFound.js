import React from 'react';
import NavBar from '../components/NavBar';

const NotFound = _ =>(
    <div className="NotFound">
        <NavBar/>
        <hr/>
        <h1>Not found! Try somewhere else</h1>
    </div>);

export default NotFound;