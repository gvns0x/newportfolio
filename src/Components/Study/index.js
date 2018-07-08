import React, { Component } from 'react';
import './index.css';
import { styles } from '../../styles.js';

export default class Study extends Component {
    render() {
        const background = {
            backgroundImage: "url("+this.props.image+")"
        }
        return(<div className="Study">
            <div className="Study-image" style={background}></div>
            <h2 className="Study-title" style={styles.titleStyles.titleH2}>{this.props.name}</h2>
            <p style={styles.textStyles.textNormal}>{this.props.areas}</p>
        </div>)
    }
}
