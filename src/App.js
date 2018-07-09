import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import Header from './Components/Header';
import HeaderSVG from './Components/HeaderSVG';
import TextBlock from './Components/TextBlock';
import H1Title from './Components/Titles/H1Title';
import Indicator from './Components/Indicator';
import Study from './Components/Study';
import Together from './Components/Together';

import { styles } from './styles.js';
class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <H1Title>
            João Araújo
          </H1Title>
          <TextBlock>
            <p style={styles.textStyles.textNormal}><span style={styles.textStyles.textBold}>I’m a Digital Product Designer</span> from Portugal, currently living in Porto. I’ve had the opportunity to work as a designer for both startups and big companies.</p>
          </TextBlock>
          <TextBlock>
            <p style={styles.textStyles.textNormal}>If you want to know more about my work or discuss how I can bring value to your project, feel free to <a href="#" style={styles.textStyles.textLink}>contact me through my e-mail hi@juauz.com</a></p>
          </TextBlock>
          <Indicator/>
        </Header>
        <Study name="MEO UX/UI Redesign" areas="Research / UX Design / UI Design" image="http://via.placeholder.com/500x500"/>
        <Study name="MEO UX/UI Redesign" areas="Research / UX Design / UI Design" image="http://via.placeholder.com/500x500"/>
        <Study name="MEO UX/UI Redesign" areas="Research / UX Design / UI Design" image="http://via.placeholder.com/500x500"/>
        <Study name="MEO UX/UI Redesign" areas="Research / UX Design / UI Design" image="http://via.placeholder.com/500x500"/>
        <Together/>
      </Layout>
    );
  }
}

export default App;
