import React, { Component } from 'react';

export default class Block extends Component {
    render() {

        const margins = {
            marginTop: this.props.top,
            marginBottom: this.props.bottom
        }
        
        return (
            <div className="Block" style={margins}>{this.props.children}</div>
        )
    }
}
