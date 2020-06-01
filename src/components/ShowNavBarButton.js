import React from 'react';
import Styles from './ShowNavBarButton.module.scss'
const ShowNavBarButton = props => (
    <button className = {Styles.root} onClick={props.onClick}>Menu</button>
)

export default ShowNavBarButton;