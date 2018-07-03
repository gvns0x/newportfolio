import React, { Component } from 'react';
import './index.css';

export default class TextBlock extends Component {
    render() {
        return (<div className="TextBlock">
            {this.props.children}
        </div>);
    }
}
