import React, { Children } from 'react';
import Styles from './CodeInline.module.scss';

export default function CodeInline({ children }){
    return(
        <code className = {Styles.root}>
            {children}
        </code>
    );
}