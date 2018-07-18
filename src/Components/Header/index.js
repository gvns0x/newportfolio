import React, { Component } from 'react';
import { styles } from '../../styles.js';
import Block from '../Block';
import './index.css';

export default class Header extends Component {
    render() {
        return (
        <div className="Header">
            <div className="Header-content">
                <div className="Header-title">
                    <Block><h1 style={styles.titleStyles.titleH1}>João Araújo</h1></Block>
                </div>
                <div className="Header-text">
                    <Block bottom="16px"><p style={styles.textStyles.textNormal}><span style={styles.textStyles.textBold}>I’m a Digital Product Designer</span> from Portugal, currently living in Porto. I’ve had the opportunity to work as a designer for both startups and big companies.</p></Block>
                    <Block top="16px" bottom="16px"><p style={styles.textStyles.textNormal}>If you want to know more about my work or discuss how I can bring value to your project, feel free to contact me through my e-mail hi@juauz.com</p></Block>
                </div>
            </div>
        </div>)
    }
}
