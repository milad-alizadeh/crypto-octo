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

class LineChart extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    color: PropTypes.string,
    timeUnit: PropTypes.string.isRequired,
    displayFormat: PropTypes.string.isRequired,
    onTooltipXChange: PropTypes.func,
    onTooltipYChange: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      chartOptions: {}
    };
  }

  componentDidMount() {
    this.setChartOptions();
  }

  setChartOptions() {
    let { onTooltipXChange, onTooltipYChange } = this.props;

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

    if (this.props.timeUnit) {
      options.scales.xAxes = [{
        type: 'time',
        time: {
          unit: this.props.timeUnit,
          displayFormats: {
            [this.props.timeUnit]: this.props.displayFormat
          }
        }
      }];
    }

    const chart = new Chart(canvas, {
      type: 'line',
      options,
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

    this.setState({
      chart,
      chartOptions: options
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
