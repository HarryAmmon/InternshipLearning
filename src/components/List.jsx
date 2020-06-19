import React from 'react';
import Styles from './List.module.scss';

const List = ({ listItems }) => {
    console.log(`No List Items: ${listItems.length}`)
    console.log(listItems);
    return(<ul className={Styles.root}>
        {listItems.map((item, index) => 
            (<li className={Styles.listItem} key={index}>{item}</li>)
        )}
    </ul>)
};

export default List