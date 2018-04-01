import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LineChart } from 'components';

const LineChartWithLabelStyled = styled.div`
`;

const HoveredPrice = styled.div`
  color: white;
`;
const HoveredTime = styled.div`
  color: red;
`;


class LineChartWithLabel extends Component {
  static propTypes = {
    chartData: PropTypes.shape({
      data: PropTypes.array.isRequired,
      timeUnit: PropTypes.string.isRequired,
      displayFormat: PropTypes.string.isRequired
    }),
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTime: null,
      activePrice: null
    };

    this.setTimeBound = this.setTime.bind(this);
    this.setPriceBound = this.setPrice.bind(this);
  }

  setTime(activeTime) {
    this.setState({ activeTime });
  }

  setPrice(activePrice) {
    this.setState({ activePrice });
  }

  render() {
    let { chartData, color } = this.props;

    let { activePrice, activeTime } = this.state;

    return (
      <LineChartWithLabelStyled>
        <HoveredTime>{activeTime}</HoveredTime>
        <HoveredPrice>{activePrice}</HoveredPrice>
        <LineChart
          chartData={chartData}
          color={color}
          onTooltipXChange={this.setTimeBound}
          onTooltipYChange={this.setPriceBound}
        />
      </LineChartWithLabelStyled>
    );
  }
}

export default LineChartWithLabel;
