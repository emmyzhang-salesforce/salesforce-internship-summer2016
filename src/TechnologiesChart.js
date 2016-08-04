import React, { Component } from 'react';
import {Chart} from 'react-google-charts'

export default class TechnologiesChart extends Component {
  render() {
    return (
      <Chart
        chartType = "PieChart"
        data = {[
          ["Knowlege","Percentage"],
          ["React",40],
          ["PhantomCSS", 30],
          ["NodeJs/ExpressJs",10],
          ["Salesforce Lightning Design System (SLDS)",10],
          ["Github",5],
          ["Gulp", 5]
        ]}
        options = {{"title":"Technologies I used/learned"}}
        graph_id = "PieChart"
        width={"100%"}
        height={"500px"}
        legend_toggle={true} />
    );
  }
}
