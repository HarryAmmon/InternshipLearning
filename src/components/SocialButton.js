import React from 'React';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class SocialButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <button>
                    <a href={this.props.url}>
                        <FontAwesomeIcon icon={this.props.icon} />
                    </a>
                </button>
            </div>
        );
    }
}