import React from 'react';
import Styles from './Code.module.scss';

export default function Code({ children }){
    console.log(`Children number: ${React.Children.count(children)}`);

    return(
        <code className={Styles.root}>
           {React.Children.map(children, child => {
                let lineArray = child.split('\n');

                lineArray.forEach((element,i) => {
                    lineArray[i] = 
                    <div key={i} className={Styles.line}>
                        <div className={Styles.lineNumber}>{i + 1}</div>
                        <div className={Styles.code}>{element}</div>
                    </div>
                });

                return(<pre className={Styles.preserve}>{lineArray}</pre>)
           } )}
        </code>
    )
}
