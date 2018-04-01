import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Chart from 'chart.js';
import _ from 'lodash';
import 'chartjs-plugin-annotation';

import { hexToRGB } from '../../helpers';
import chartOptions from './chartOptions';

const LineChartStyled = styled.div`
  height: 30rem;
  max-width: 110rem;

  ${breakpoint('medium')`
    height: 50rem;
  `}
`;

class LineChart extends Component {
  static propTypes = {
    chartData: PropTypes.shape({
      data: PropTypes.array.isRequired,
      timeUnit: PropTypes.string.isRequired,
      displayFormat: PropTypes.string.isRequired
    }),
    color: PropTypes.string,
    onTooltipXChange: PropTypes.func,
    onTooltipYChange: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      chart: null
    };
  }

  componentDidMount() {
    let canvas = this.canvas.getContext('2d');
    let gradient = this.createGradient(canvas, hexToRGB(this.props.color, '0.75'), hexToRGB(this.props.color, '0'));
    let { color, chartData } = this.props;

    this.createChart(gradient.ctx, this.getChartOptions(this.props), chartData.data, color, gradient.gradientFill);
  }

  componentWillReceiveProps(nextProps) {
    this.updateChart(nextProps);
  }

  /**
   * Get Chart options based on the passed props
   * @param  {Obj} props props
   * @return {Obj} chart options
   */
  getChartOptions(props) {
    let { onTooltipXChange, onTooltipYChange } = props;
    let { timeUnit, displayFormat, data } = props.chartData;

    // Tooltip callbacks - used to broadcast tooltip data to another component
    chartOptions.tooltips.callbacks = {
      label(tooltipItem) {
        if (onTooltipXChange) {
          onTooltipXChange(tooltipItem.xLabel);
        }
      },
      title(tooltipItem) {
        if (onTooltipYChange) {
          onTooltipYChange(tooltipItem[0].yLabel);
        }
      }
    };

    // Apply time units and display format
    chartOptions.scales.xAxes = [{
      type: 'time',
      time: {
        unit: timeUnit,
        displayFormats: {
          [timeUnit]: displayFormat
        }
      }
    }];

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
   * Create a gradient fill on a node canvas
   * @param  {DOMNode} ctx   dom node canvas
   * @param  {String} color1 start color
   * @param  {String} color2 end color
   * @return {Object} gradientFill and canvas
   */
  createGradient(ctx, color1, color2) {
    let gradientFill = ctx.createLinearGradient(0, 0, 0, ctx.canvas.parentNode.offsetHeight);
    gradientFill.addColorStop(0, color1);
    gradientFill.addColorStop(1, color2);

    return {
      gradientFill,
      ctx
    };
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
  createChart(ctx, options, data, color, gradientFill) {
    let { createHoverLine } = this;

    let chart = new Chart(ctx, {
      type: 'line',
      options,
      plugins: [{
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
          backgroundColor: gradientFill,
          pointHitRadius: 10
        }]
      }
    });

    this.setState({
      chart
    });
  }

  render() {
    return (
      <LineChartStyled>
        <canvas ref={(canvas) => { this.canvas = canvas; }} />
      </LineChartStyled>
    );
  }
}

LineChart.defaultProps = {
  color: '#ff2d78'
};

export default LineChart;
