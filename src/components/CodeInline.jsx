import React, { Children } from 'react';
import Styles from './CodeInline.module.scss';

export default function CodeInline({ children }){
    console.log("React children number: "+React.Children.count(children))
    return(
        <code className = {Styles.root}>
            {children}
        </code>
    );
}