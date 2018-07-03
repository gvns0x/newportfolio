import React, { Component } from 'react';
import { styles } from '../../../styles';
import './index.css'

export default class H1Title extends Component {
    render() {
        return (
            <h1 style={styles.titleStyles.titleH1}>
                {this.props.children}
            </h1>
        )
    }
}
