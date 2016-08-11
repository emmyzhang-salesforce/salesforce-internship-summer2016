import React, { Component } from 'react'
import {Chart} from 'react-google-charts'

export default class NonTechChart extends Component {
  render() {
    return (
      <Chart
        chartType = "PieChart"
        data = {[
          ["Knowlege","Percentage"],
          ["Agile/Scrum",30],
          ["Communicating Ideas",30],
          ["Poor Posture leads to neck strain and horrible headaches", 15]
        ]}
        options = {{"title":"Non Tech things I learned"}}
        graph_id = "PieChart"
        width={"100%"}
        height={"500px"}
        legend_toggle={true} />
    );
  }
}
