import React, { Component } from 'react';
import './normalize.css';
import './reset.css';
import './index.css';

export default class Layout extends Component {
    render() {
        return (<div className="Layout">
            {this.props.children}
        </div>);
    }
}
