import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { LineChart, Button } from 'components';
import theme from '../../themes/default';

const HistoricalChartStyled = styled.div``;

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
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
`;

const HoveredTime = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

class HistoricalChart extends Component {
  static propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.object,
    onControlClick: PropTypes.func,
    color: PropTypes.string,
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
      currentChartData: {}
    };

    this.setTime = this.setTime.bind(this);
    this.setPrice = this.setPrice.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Combine data and active control options for the chart
    if (nextProps.data) {
      this.setState({
        currentChartData: {
          data: nextProps.data,
          ...this.state.activeControl
        },
        displayChart: true
      });

      // Set the latest time and price
      this.setTime(nextProps.data[nextProps.data.length - 1].x);
      this.setPrice(nextProps.data[nextProps.data.length - 1].y);
    }

    // Select the first control if active control is not set
    if (!this.state.activeControl) {
      this.setState({
        activeControl: nextProps.controls[0]
      });
    }
  }

  onControlClick(activeControl) {
    this.setState({
      activeControl,
      displayChart: false
    });
    this.props.onControlClick(activeControl);
  }

  setTime(activeTime) {
    this.setState({ activeTime: moment(activeTime).format('MMMM Do YYYY, h:mm:ss a') });
  }

  setPrice(activePrice) {
    let formattedActivePrice = this.formatCurrency(activePrice, '$', 'en-US');
    this.setState({ activePrice: formattedActivePrice });
  }

  /**
   * Format a number to a currency
   * @param  {Number} number
   * @param  {String} currency
   * @return {String} formated number
   */
  formatCurrency(number, currency, locale) {
    return currency + number.toLocaleString(locale);
  }

  renderControls() {
    let { activeControl } = this.state;
    let { controls } = this.props;

    return controls.map((control) => {
      return (
        <ButtonStyled
          key={control.label}
          size="small"
          onClick={() => this.onControlClick(control)}
          active={activeControl === control}
        >
          {control.label}
        </ButtonStyled>
      );
    });
  }

  render() {
    let { loading, error } = this.props;
    let { activePrice, activeTime, currentChartData, displayChart } = this.state;

    if (loading) {
      return (<div style={{ color: 'white' }}>Loading ...</div>);
    } else if (error) {
      return (<div style={{ color: 'white' }}>Oops! something went wrong. Please refresh your page</div>);
    }

    return (
      <HistoricalChartStyled>
        <Header>
          <Value>
            <HoveredTime>{activeTime}</HoveredTime>
            <HoveredPrice>{activePrice}</HoveredPrice>
          </Value>
          <Contorls>
            ${this.renderControls()}
          </Contorls>
        </Header>

        {displayChart &&
          <LineChart
            chartData={currentChartData}
            color={theme.colors.primary}
            onTooltipXChange={this.setTime}
            onTooltipYChange={this.setPrice}
          />
        }
      </HistoricalChartStyled>
    );
  }
}

export default HistoricalChart;
