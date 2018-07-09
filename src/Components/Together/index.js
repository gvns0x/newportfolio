import React, { Component } from 'react';
import './index.css';
import { styles } from '../../styles.js';

export default class Together extends Component {
    render() {
        return <div className="Together">
            <h1 style={styles.titleStyles.titleH1}>Let's work together</h1>
            <p style={styles.textStyles.textNormal}>I’d love to hear more about your project and how I can help. Tell me more about it — I’ll be in touch as soon as possible.</p>
        </div>
    }
}
