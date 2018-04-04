import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Spinner, Fade, Heading } from 'components';
import {
  HistoricalChartStyled,
  Header,
  LoadingContainer,
  Content,
  Contorls,
  ControlsWrapper,
  ButtonStyled,
  Value,
  HoveredTime,
  HoveredPrice,
  LineChartStyled
} from './styles';

import theme from '../../themes/default';

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
          tag="li"
          modifiers={['small', 'circular', 'circularOnMobile']}
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
            <HoveredTime color="greyLight">{activeTime}</HoveredTime>
            <HoveredPrice color="primary" size="large">{activePrice}</HoveredPrice>
          </Value>
          <ControlsWrapper>
            <Contorls>
              {this.renderControls()}
            </Contorls>
          </ControlsWrapper>
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
