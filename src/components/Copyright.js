import React from 'react';

export default class Copyright extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <small>
                © {this.props.year} Harry Ammon
            </small>);
    }
}