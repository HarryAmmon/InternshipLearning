import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './StartJourney.module.scss';

const StartJourney = _ =>(
    <Link className={Styles.root}to="/DotNetCore">Start Learning Journey</Link>
)

export default StartJourney;