import React from 'react';
import Styles from './MenuButton.module.scss'
const MenuButton = props => (
    <button className = {Styles.root} onClick={props.onClick}> Menu</button>
)

export default MenuButton;