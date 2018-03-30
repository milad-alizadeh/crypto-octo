import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Chart from 'chart.js';
import 'chartjs-plugin-annotation';
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
    data: PropTypes.object,
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
    chartOptions.tooltips.callbacks = {
      label(tooltipItem, data) {
        console.log(tooltipItem.yLabel, data, ' -----Tooltip Label');
      },
      title(tooltipItem, data) {
        console.log(data.labels[tooltipItem[0].index], ' -----Tooltip title')
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
      ctx
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
      ctx.strokeStyle = '#7a42d8';
      ctx.stroke();
      ctx.restore();
    }
  }

  createChart(ctx) {
    let self = this;

    let gradient = this.createGradient(ctx, 'rgba(122, 66, 216, 0.75)', 'rgba(122, 66, 216, 0)');
    let { gradientFill, canvas } = gradient;

    const chart = new Chart(canvas, {
      type: 'line',
      options: this.state.chartOptions,
      plugins: [{
        afterDatasetsDraw(chart) {
          self.createHoverLine(chart);
        }
      }],
      data: {
        labels: [1522339200, 1522342800, 1522346400, 1522350000, 1522353600, 1522357200, 1522360800, 1522364400, 1522368000, 1522371600, 1522375200, 1522378800, 1522382400, 1522386000, 1522389600, 1522393200, 1522396800, 1522400400, 1522404000, 1522407600, 1522411200, 1522414800, 1522418400, 1522422000, 1522424433],
        datasets: [{
          borderColor: this.props.color,
          pointBorderColor: 'transparent',
          pointBackgroundColor: 'transparent',
          label: 'Your portfolio',
          data: [7488.2218, 7511.8506, 7456.3352, 7457.3656, 7363.8304, 7129.6176, 7093.7704, 7192.1044, 7107.1376, 6841.3188, 6900.963, 6851.8798, 6876.6782, 6722.0364, 7134.8436, 7052.8856, 7217.5612, 7105.4744, 7042.2552, 6901.6982, 7030.928, 7040.5664, 6895.245, 6872.771, 6807.2916, 6746.9166],
          borderWidth: 1.5,
          fill: true,
          backgroundColor: gradientFill,
          pointHitRadius: 10
        }]
      }
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

export default LineChart;
