import React from "react";

export class TypeIndicator extends React.Component {

    render () {
        return (        // set as type class to change color of button accordingly, and "type-indicator" button css
            <button 
                className={`type-indicator ${this.props.type}`}disabled>
                    {this.props.type}
            </button>
        )
    }
}
