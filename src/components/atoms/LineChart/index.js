import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Chart from 'chart.js';
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

const HoveredPrice = styled.div`
  color: white;
`;
const HoveredTime = styled.div`
  color: red;
`;

class LineChart extends Component {
  static propTypes = {
    data: PropTypes.array,
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      ctx: null,
      chart: null,
      chartOptions: {}
    };
  }

  componentDidMount() {
    this.setChartOptions();
  }

  setChartOptions() {
    let currentComponent = this;
    chartOptions.tooltips.callbacks = {
      label(tooltipItem, data) {
        currentComponent.setState({ hoveredPrice: tooltipItem.yLabel });
      },
      title(tooltipItem, data) {
        currentComponent.setState({ hoveredTime: data.labels[tooltipItem[0].index] });
      }
    };

    chartOptions.scales.xAxes.callback = (tick, index, array) => {
      console.log(arguments, ' -----Axes Callback');
      return tick;
    }

    chartOptions.scales.yAxes.callback = (value, index, ticks) => {
      console.log(arguments, 'yAxes');
      return value;
    }

    this.setState({
      chartOptions
    }, () => {
      this.createChart(this.canvas.getContext('2d'));
    });
  }

  createGradient(ctx, color1, color2) {
    let gradientFill = ctx.createLinearGradient(0, 0, 0, ctx.canvas.parentNode.offsetHeight);
    gradientFill.addColorStop(0, color1);
    gradientFill.addColorStop(1, color2);

    return {
      gradientFill,
      canvas: ctx
    };
  }

  createHoverLine(chart) {
    let { tooltip } = chart;
    if (tooltip._active && tooltip._active.length) {
      let activePoint = tooltip._active[0];
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
      ctx.strokeStyle = this.props.color;
      ctx.stroke();
      ctx.restore();
    }
  }

  createChart(ctx) {
    let self = this;

    let gradient = this.createGradient(ctx, hexToRGB(this.props.color, '0.75'), hexToRGB(this.props.color, '0'));
    let { gradientFill, canvas } = gradient;

    let options = this.state.chartOptions;

    options.scales.xAxes = [{
      type: 'time',
      time: {
        unit: 'day',
        displayFormats: {
          day: 'MMM DD hh:mm'
        }
      }
    }];

    const chart = new Chart(canvas, {
      type: 'line',
      options: options,
      plugins: [{
        afterDatasetsDraw(chart) {
          self.createHoverLine(chart);
        }
      }],
      data: {
        datasets: [{
          borderColor: this.props.color,
          data: this.props.data,
          borderWidth: 1.5,
          fill: true,
          backgroundColor: gradientFill,
          pointHitRadius: 10
        }]
      }
    });
  }

  render() {
    let { hoveredPrice, hoveredTime } = this.state;
    return (
      <LineChartStyled>
        <HoveredTime>{hoveredTime}</HoveredTime>
        <HoveredPrice>{hoveredPrice}</HoveredPrice>
        <canvas ref={(canvas) => { this.canvas = canvas; }} />
      </LineChartStyled>
    );
  }
}

export default LineChart;
