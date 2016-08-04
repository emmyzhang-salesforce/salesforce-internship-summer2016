import React, { Component } from 'react';
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

var MyPieChart = React.createClass({
  render: function() {
    var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    }
    var chartData = [
        {
          color1:  "Red",
          color2: "Blue",
          color3: "Yellow"}

    ];
    return (
      <Chart
        title={title}
        width={width}
        height={height}
        margins= {margins}
      >
        <LineChart
          margins= {margins}
          title={title}
          data={chartData}
          width={width}
          height={height}
          chartSeries={chartSeries}
          x={x}
        />
      </Chart>
    );
  }
});

export default class Charts extends Component {
  render() {
    return (
      <div className='chart-container'>
        <h1>I am a chart.</h1>
        <MyPieChart />
      </div>
    );
  }
}
