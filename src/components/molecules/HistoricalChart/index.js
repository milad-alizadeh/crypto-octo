import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner, Fade, Heading, ChartControls, LineChart } from 'components';
import { ChartInfo } from 'containers';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import theme from '../../themes/default';

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
    fetchChartData: PropTypes.func,
    setSelectedPrice: PropTypes.func,
    controls: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      timeUnit: PropTypes.string.isRequired,
      displayFormat: PropTypes.string.isRequired
    }))
  };

  constructor(props) {
    super(props);

    this.state = {
      activeControl: null,
      displayChart: false,
      animationDuration: 200,
      currentChartData: {}
    };

    this.onSetActiveControl = this.onSetActiveControl.bind(this);
    this.onTooltipChange = this.onTooltipChange.bind(this);
  }

  componentDidMount() {
    this.createChartData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createChartData(nextProps);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    this.timeout = 0;
  }

  onSetActiveControl(activeControl) {
    this.setState({
      activeControl,
      displayChart: false
    });

    if (this.props.fetchChartData) {
      this.props.fetchChartData(activeControl.apiParams);
    }
  }

  onTooltipChange(time, price) {
    if (this.props.setSelectedPrice) {
      this.props.setSelectedPrice(time, price);
    }
  }

  /**
   * Create Chart data based on the current props
   * @param  {Array} chartData
   */
  createChartData({ chartData }) {
    // Combine data and active control options for the chart
    if (chartData && chartData.length) {
      this.setState({
        currentChartData: {
          data: chartData,
          ...this.state.activeControl
        }
      });

      // Rerender chart after the transition period is over
      this.timeout = setTimeout(() => {
        this.setState({
          displayChart: true
        });
      }, this.state.animationDuration);
    }
  }

  // setControls(time) {
  //   switch (time) {
  //     case '1y':
  //
  //       break;
  //     default:
  //
  //   }
  // }

  render() {
    let { loading, error, controls } = this.props;
    let { currentChartData, displayChart, animationDuration } = this.state;

    return (
      <HistoricalChartStyled {...this.props} >
        <Header>
          <ChartInfo />
          <ChartControls
            controls={controls}
            setActiveControl={this.onSetActiveControl}
          />
        </Header>
        <Content>
          {error &&
            <Heading color="secondary" level={3}>Oops! something went wrong. Please refresh your page and try again</Heading>
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
                  chartData={currentChartData}
                  color={theme.colors.primary}
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
