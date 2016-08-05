import React, { Component } from 'react';
import {render} from 'react-dom'
import Navbar from './Navbar';
import TechnologyChart from './TechnologyChart';
import NonTechChart from './NonTechChart';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TechnologyChart />
        <NonTechChart />
      </div>
    );
  }
}
