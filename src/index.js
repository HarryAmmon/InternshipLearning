import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.js';
import { BrowserRouter as Router } from "react-router-dom";
const app = document.querySelector("#app");

ReactDom.render(
    <Router>
    <App />
    </Router>, app);
