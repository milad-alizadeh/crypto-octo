import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { LineChart, Button, Spinner, Fade, Heading, Text } from 'components';
import theme from '../../themes/default';

const HistoricalChartStyled = styled.div``;

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;

  ${breakpoint('small')`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

const LoadingContainer = styled.div`
  z-index: 2;
`;

const LineChartStyled = styled(LineChart)``;

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
    height: 50rem;
  `}
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
  align-items: center;
  margin-bottom: 2rem;

  ${breakpoint('small')`
    align-items: flex-start;
    margin-bottom: 0;
  `}
`;

const HoveredTime = styled(Text)`
  color: ${({ theme }) => theme.colors.greyLight};
  margin-bottom: 1rem;
`;


const HoveredPrice = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
`;

class HistoricalChart extends Component {
  static propTypes = {
    chartData: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.object,
    onControlClick: PropTypes.func,
    controls: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      timeUnit: PropTypes.string.isRequired,
      displayFormat: PropTypes.string.isRequired
    }))
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTime: '',
      activePrice: '',
      activeControl: null,
      displayChart: false,
      animationDuration: 300,
      currentChartData: {}
    };

    this.setTimeoutAndPrice = this.setTimeoutAndPrice.bind(this);
  }

  componentDidMount() {
    this.createChartData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createChartData(nextProps);
  }

  onControlClick(activeControl) {
    this.setState({
      activeControl,
      displayChart: false
    });
    this.props.onControlClick(activeControl);
  }

  setTime(activeTime) {
    this.setState({ activeTime: moment(activeTime).format('MMMM Do YYYY, h:mm a') });
  }

  setPrice(activePrice) {
    let formattedActivePrice = this.formatCurrency(activePrice, '$', 'en-US');
    this.setState({ activePrice: formattedActivePrice });
  }

  setTimeoutAndPrice(xLabel, yLabel) {
    this.setTime(xLabel);
    this.setPrice(yLabel);
  }

  /**
   * Create Chart data based on the current props
   * @param  {Array} chartData
   * @param  {Array} controls
   */
  createChartData({ chartData, controls }) {
    // Combine data and active control options for the chart
    if (chartData && chartData.length) {
      this.setState({
        currentChartData: {
          data: chartData,
          ...this.state.activeControl
        }
      });

      // Rerender chart after the transition period is over
      setTimeout(() => {
        this.setState({
          displayChart: true
        });
      }, this.state.animationDuration);

      // Set the latest time and price
      this.setTimeoutAndPrice(chartData[chartData.length - 1].x, chartData[chartData.length - 1].y);
    }

    // Select the first control if active control is not set
    if (!this.state.activeControl) {
      this.setState({
        activeControl: controls[0]
      });
    }
  }

  /**
   * Format a number to a currency
   * @param  {Number} number
   * @param  {String} currency
   * @return {String} formated number
   */
  formatCurrency(number, currency, locale) {
    return currency + number.toFixed(2).toLocaleString(locale);
  }

  renderControls() {
    let { activeControl } = this.state;
    let { controls } = this.props;

    return controls.map((control) => {
      return (
        <ButtonStyled
          key={control.label}
          size="small"
          onClick={() => activeControl !== control && this.onControlClick ? this.onControlClick(control) : null}
          active={activeControl === control}
        >
          {control.label}
        </ButtonStyled>
      );
    });
  }

  render() {
    let { loading, error } = this.props;
    let { activePrice, activeTime, currentChartData, displayChart, animationDuration } = this.state;

    return (
      <HistoricalChartStyled {...this.props} >
        <Header>
          <Value>
            <HoveredTime>{activeTime}</HoveredTime>
            <HoveredPrice size="large">{activePrice}</HoveredPrice>
          </Value>
          <Contorls>
            {this.renderControls()}
          </Contorls>
        </Header>
        <Content>
          {error &&
            <Heading color="secondary" level={3}>Oops! something went wrong. Please refresh your page and try again</Heading>
          }

          {!error &&
            <div>
              <Fade timeout={animationDuration} in={loading}>
                <LoadingContainer>
                  <Spinner />
                </LoadingContainer>
              </Fade>

              <Fade timeout={animationDuration} in={displayChart}>
                <LineChartStyled
                  chartData={currentChartData}
                  color={theme.colors.primary}
                  onTooltipChange={this.setTimeoutAndPrice}
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
