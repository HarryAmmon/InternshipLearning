import React from 'react';
import Styles from './List.module.scss';

const List = ({Children}) => (
    <ul>
        {React.Children.map(Children, (child, index) => 
            (<li key={index}>{child}</li>)
        )}
    </ul>
);

export default List