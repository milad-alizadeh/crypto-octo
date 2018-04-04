import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { LineChart, Button, Spinner, Fade } from 'components';
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

  ${LineChartStyled}, ${LoadingContainer} {
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

  ${breakpoint('small')`
    align-items: flex-start;
  `}
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
    chartData: PropTypes.array,
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
      currentChartData: {}
    };

    this.setTime = this.setTime.bind(this);
    this.setPrice = this.setPrice.bind(this);
  }

  componentWillReceiveProps({ chartData, controls }) {
    // Combine data and active control options for the chart
    if (chartData && chartData.length) {
      this.setState({
        currentChartData: {
          data: chartData,
          ...this.state.activeControl
        }
      });

      // Set the latest time and price
      this.setTime(chartData[chartData.length - 1].x);
      this.setPrice(chartData[chartData.length - 1].y);
    }

    // Select the first control if active control is not set
    if (!this.state.activeControl) {
      this.setState({
        activeControl: controls[0]
      });
    }
  }

  onControlClick(activeControl) {
    this.setState({
      activeControl
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
    let { activePrice, activeTime, currentChartData } = this.state;
    let chart;

    if (error) {
      chart = (<div style={{ color: 'white' }}>Oops! something went wrong. Please refresh your page</div>);
    }

    return (
      <HistoricalChartStyled {...this.props} >
        <Header>
          <Value>
            <HoveredTime>{activeTime}</HoveredTime>
            <HoveredPrice>{activePrice}</HoveredPrice>
          </Value>
          <Contorls>
            {this.renderControls()}
          </Contorls>
        </Header>
        <Content>
          { loading &&
            <LoadingContainer>
              <Spinner />
            </LoadingContainer>
          }

          { !loading && currentChartData.data &&
            <LineChartStyled
              chartData={currentChartData}
              color={theme.colors.primary}
              onTooltipXChange={this.setTime}
              onTooltipYChange={this.setPrice}
            />
          }
        </Content>
      </HistoricalChartStyled>
    );
  }
}

export default HistoricalChart;
