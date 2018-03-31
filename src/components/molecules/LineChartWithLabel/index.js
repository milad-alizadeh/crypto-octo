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
    data: PropTypes.array,
    color: PropTypes.string,
    timeUnit: PropTypes.string.isRequied,
    displayFormat: PropTypes.string.isRequired
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
    let {
      data, color, timeUnit, displayFormat
    } = this.props;

    let { activePrice, activeTime } = this.state;

    return (
      <LineChartWithLabelStyled>
        <HoveredTime>{activeTime}</HoveredTime>
        <HoveredPrice>{activePrice}</HoveredPrice>
        <LineChart
          data={data}
          color={color}
          displayFormat={displayFormat}
          timeUnit={timeUnit}
          onTooltipXChange={this.setTimeBound}
          onTooltipYChange={this.setPriceBound}
        />
      </LineChartWithLabelStyled>
    );
  }
}

export default LineChartWithLabel;
