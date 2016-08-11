import React, { Component } from 'react';
import {Chart} from 'react-google-charts'

export default class TechnologyChart extends Component {
  render() {
    return (
      <Chart
        chartType = "PieChart"
        data = {[
          ["Knowlege","Percentage"],
          ["React/React-Router",35],
          ["PhantomCSS", 25],
          ["Salesforce Lightning Design System (SLDS)",15],
          ["NodeJs/ExpressJs",10],
          ["Github",5],
          ["Gulp", 5],
          ["Javascript", 5],
          ["Heroku", 5]
        ]}
        options = {{"title":"Technologies I used/learned"}}
        graph_id = "PieChart"
        width={"100%"}
        height={"500px"}
        legend_toggle={true} />
    );
  }
}
