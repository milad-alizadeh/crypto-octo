import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chart from 'chart.js';
import _ from 'lodash';
import 'chartjs-plugin-annotation';

import { hexToRGB } from '../../helpers';
import chartOptions from './chartOptions';

const LineChartStyled = styled.div``;

class LineChart extends Component {
  static propTypes = {
    chartData: PropTypes.shape({
      data: PropTypes.array.isRequired,
      timeUnit: PropTypes.string.isRequired,
      displayFormat: PropTypes.string.isRequired
    }),
    color: PropTypes.string,
    onTooltipChange: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      chart: null
    };
  }

  componentDidMount() {
    let ctx = this.canvas.getContext('2d');
    let { color, chartData } = this.props;

    this.createChart(ctx, this.getChartOptions(this.props), chartData.data, color);
  }

  /**
   * Get Chart options based on the passed props
   * @param  {Obj} props props
   * @return {Obj} chart options
   */
  getChartOptions(props) {
    let { onTooltipChange } = props;
    let { timeUnit, displayFormat, data } = props.chartData;

    // Tooltip callbacks - used to broadcast tooltip data to another component
    chartOptions.tooltips.callbacks = {
      label(tooltipItem) {
        if (onTooltipChange) {
          onTooltipChange(tooltipItem.xLabel, tooltipItem.yLabel);
        }
      },
      title() {

      }
    };

    // Apply time units and display format
    chartOptions.scales.xAxes[0] = {
      ...chartOptions.scales.xAxes[0],
      type: 'time',
      time: {
        unit: timeUnit,
        displayFormats: {
          [timeUnit]: displayFormat
        }
      }
    };

    // Create annotation line
    chartOptions.annotation = {
      annotations: [
        {
          drawTime: 'beforeDatasetsDraw',
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: this.getHighestValue(data),
          borderColor: '#505050',
          borderWidth: 1,
          borderDash: [2, 6]
        }
      ]
    };

    return chartOptions;
  }

  /**
   * Ge the highest value a of a key in an array data objects
   * @param  {Array} data
   * @return {Number} Max value
   */
  getHighestValue(data) {
    if (!data && !_.has(data, 'y')) {
      throw new Error('Please provide correct data');
    }

    return _.maxBy(data, 'y').y;
  }

  /**
   * Update Chart Data
   * @param  {Object} nextProps next props
   */
  updateChart(nextProps) {
    let { chart } = this.state;

    if (nextProps.chartData !== this.props.chartData) {
      // Update Dataset
      chart.config.data.datasets[0].data = nextProps.chartData.data;

      // Update Annotation
      chart.options = this.getChartOptions(nextProps);
      chart.update();
    }
  }

  /**
   * Create a vertical line on chart hover
   * @param  {Object} chart chart instance
   */
  createHoverLine(chart, color) {
    let { tooltip } = chart;

    if (tooltip._active && tooltip._active.length) { // eslint-disable-line no-underscore-dangle
      let activePoint = tooltip._active[0]; // eslint-disable-line no-underscore-dangle
      let { ctx } = chart;
      let yAxis = chart.scales['y-axis-0'];
      let { x } = activePoint.tooltipPosition();
      let topY = yAxis.top;
      let bottomY = yAxis.bottom;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.restore();
    }
  }

  /**
   * Create a line chart
   * @param  {DOMNode} ctx dom canvas node
   */
  createChart(ctx, options, data, color) {
    let { createHoverLine } = this;

    let chart = new Chart(ctx, {
      type: 'line',
      options,
      plugins: [{
        afterLayout(chart) {
          let gradientFill = chart.ctx.createLinearGradient(0, 0, 0, chart.ctx.canvas.offsetHeight);
          gradientFill.addColorStop(0, hexToRGB(color, '0.75'));
          gradientFill.addColorStop(1, hexToRGB(color, '0'));
          chart.data.datasets[0].backgroundColor = gradientFill; // eslint-disable-line no-param-reassign
        },
        afterDatasetsDraw(chart) {
          createHoverLine(chart, color);
        }
      }],
      data: {
        datasets: [{
          borderColor: color,
          data,
          borderWidth: 1.5,
          fill: true,
          pointHitRadius: 0
        }]
      }
    });

    this.setState({
      chart
    });
  }

  render() {
    return (
      <LineChartStyled {...this.props}>
        <canvas ref={(canvas) => { this.canvas = canvas; }} />
      </LineChartStyled>
    );
  }
}

LineChart.defaultProps = {
  color: '#ff2d78'
};

export default LineChart;
