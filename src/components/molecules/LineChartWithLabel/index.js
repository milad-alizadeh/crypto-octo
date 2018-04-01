import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LineChart, Button } from 'components';

const LineChartWithLabelStyled = styled.div``;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;


const Contorls = styled.ul`
  display: flex;
  margin-bottom: auto;
`;

const ButtonStyled = styled(Button)`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

const Value = styled.div`
  display: flex;
  flex-direction: column;
`;

const HoveredPrice = styled.div`
  color: white;
`;

const HoveredTime = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

class LineChartWithLabel extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    chartTypes: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      timeUnit: PropTypes.string.isRequired,
      displayFormat: PropTypes.string.isRequired
    })),
    color: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTime: null,
      activePrice: null,
      currentChartData: {}
    };

    this.setTimeBound = this.setTime.bind(this);
    this.setPriceBound = this.setPrice.bind(this);
  }

  componentWillMount() {
    this.createChartData(this.props.chartTypes[0]);
  }

  setTime(activeTime) {
    this.setState({ activeTime });
  }

  setPrice(activePrice) {
    this.setState({ activePrice });
  }

  createChartData(chartType) {
    this.setState({
      currentChartData: {
        data: this.props.data,
        ...chartType
      }
    });
  }

  renderControls() {
    let { currentChartData } = this.state;

    return this.props.chartTypes.map((el) => {
      return (
        <ButtonStyled
          key={el.label}
          size="small"
          onClick={() => this.createChartData(el)}
          active={currentChartData && currentChartData.label === el.label}
        >
          {el.label}
        </ButtonStyled>
      );
    });
  }

  render() {
    let { color } = this.props;

    let { activePrice, activeTime } = this.state;

    return (
      <LineChartWithLabelStyled>
        <Header>
          <Value>
            <HoveredTime>{activeTime}</HoveredTime>
            <HoveredPrice>{activePrice}</HoveredPrice>
          </Value>
          <Contorls>
            {this.renderControls()}
          </Contorls>
        </Header>
        <LineChart
          chartData={this.state.currentChartData}
          color={color}
          onTooltipXChange={this.setTimeBound}
          onTooltipYChange={this.setPriceBound}
        />
      </LineChartWithLabelStyled>
    );
  }
}

export default LineChartWithLabel;
