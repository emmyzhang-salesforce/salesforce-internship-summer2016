import React, { Component } from 'react';
import {render} from 'react-dom'
import Navbar from './Navbar';
import TechnologiesChart from './TechnologiesChart';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TechnologiesChart />
      </div>
    );
  }
}
