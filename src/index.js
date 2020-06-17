import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx';
const app = document.querySelector("#app");

ReactDom.render(
    <Router>
        <ScrollToTop/>
        <App />
    </Router>, app);
