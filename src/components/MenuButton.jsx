import React, { useContext } from 'react';
import Styles from './MenuButton.module.scss'
import AppContext from './AppContext.jsx'

const MenuButton = _ => {
    const context = useContext(AppContext);
    const [state, setState] = context.displayNavigation;

    return (
        <button 
            className = {Styles.root}
            onClick={_ => {setState(state => !state)}}>
                Menu
        </button>
    )
}

export default MenuButton;