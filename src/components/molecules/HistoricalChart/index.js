import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner, Fade, Heading, LineChart, ChartInfo } from 'components';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ChartControls from './index2';

const HistoricalChartStyled = styled.div``;

const LineChartStyled = styled(LineChart)``;

const Header = styled.div`
  display: grid;
  grid-gap: 4rem;
  text-align: left;
  padding-top: 2rem;

  @media (min-width: 540px) {
    grid-template-columns: auto 1fr;
    align-items: end;
  }
`;

const LoadingContainer = styled.div`
  z-index: 2;
`;

const Content = styled.div`
  padding-top: 2rem;
  height: 28rem;
  position: relative;

  > div {
    height: 100%;
  }

  ${LineChartStyled} {
    height: 100%;
    width: 100%;
  }

  ${LoadingContainer} {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${breakpoint('medium')`
    height: 40rem;
  `}
`;


class HistoricalChart extends Component {
  static propTypes = {
    chartData: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.object,
    timeFormat: PropTypes.object,
    onControlClick: PropTypes.func,
    setSelectedPrice: PropTypes.func,
    controls: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string,
    activeControl: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      displayChart: false,
      animationDuration: 400,
      selectedTime: null,
      selectedPrice: null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.createChartData(nextProps);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    this.timeout = 0;
  }

  onControlClick = (activeControl) => {
    this.props.onControlClick(activeControl);
    this.setState({ displayChart: false });
  }

  onTooltipChange = (time, price) => {
    this.setState({
      selectedTime: time,
      selectedPrice: price
    });
    // console.log(time, price);
    // if (this.props.setSelectedPrice) {
    //   this.props.setSelectedPrice(time, price);
    // }
  }
  //
  // /**
  //  * Create Chart data based on the current props
  //  * @param  {Array} chartData
  //  */
  createChartData({ chartData }) {
    // Combine data and active control options for the chart
    if (chartData && chartData.length) {
      // Rerender chart after the transition period is over
      this.timeout = setTimeout(() => {
        this.setState({ displayChart: true });
      }, this.state.animationDuration * 1.2);
    }
  }

  render() {
    let { loading, error, controls, timeFormat, chartData, color, activeControl } = this.props;
    let { displayChart, animationDuration, selectedTime, selectedPrice } = this.state;

    return (
      <HistoricalChartStyled {...this.props} >
        <Header>
          <ChartInfo
            time={selectedTime}
            price={selectedPrice}
            currencySymbol="$"
            locale="en-US"
          />
          <ChartControls
            controls={controls}
            onControlClick={this.onControlClick}
            activeControl={activeControl}
          />
        </Header>
        <Content>
          {error &&
            <Heading color="disabled" level={3}>Oops! something went wrong. Please refresh the page and try again</Heading>
          }

          {!error &&
            <div>
              {loading &&
                <LoadingContainer>
                  <Spinner />
                </LoadingContainer>
              }

              <Fade timeout={animationDuration} in={displayChart}>
                <LineChartStyled
                  chartData={chartData}
                  timeFormat={timeFormat}
                  color={color}
                  onTooltipChange={this.onTooltipChange}
                />
              </Fade>
            </div>
          }
        </Content>
      </HistoricalChartStyled>
    );
  }
}

export default HistoricalChart;
