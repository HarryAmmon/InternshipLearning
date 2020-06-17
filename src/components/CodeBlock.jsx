import React from 'react';
import Styles from './CodeBlock.module.scss';

export default function CodeBlock({ children }){
    console.log(`Children number: ${React.Children.count(children)}`);

    return(
        <code className={Styles.root}>
           {React.Children.map(children, child => {
                let lineArray = child.split('\n');

                lineArray.forEach((element,i) => {
                    if (i === 0){
                        lineArray[i] = 
                            <div key={i} className={Styles.line}>
                                <div className={Styles.firstLine}>{i + 1}</div>
                                <div className={Styles.code}>{element}</div>
                            </div>
                    } else {
                    lineArray[i] = 
                        <div key={i} className={Styles.line}>
                            <div className={Styles.lineNumber}>{i + 1}</div>
                            <div className={Styles.code}>{element}</div>
                        </div>
                    }
                });

                return(<pre className={Styles.preserve}>{lineArray}</pre>)
           } )}
        </code>
    )
}
