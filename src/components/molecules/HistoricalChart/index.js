import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    getData: PropTypes.func,
    color: PropTypes.string,
    controls: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      timeUnit: PropTypes.string.isRequired,
      displayFormat: PropTypes.string.isRequired
    }))
  };

  constructor(props) {
    super(props);
    this.createChartData = this.createChartData.bind(this);

    this.state = {
      activeTime: null,
      activePrice: null,
      currentChartData: {}
    };

    this.setTime = this.setTime.bind(this);
    this.setPrice = this.setPrice.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({
        currentChartData: {
          data: nextProps.data,
          ...nextProps.controls[0]
        }
      });
    }
  }

  setTime(activeTime) {
    this.setState({ activeTime });
  }

  setPrice(activePrice) {
    this.setState({ activePrice });
  }

  createChartData(controls) {
    // Call getData props
    if (this.props.getData) {
      this.props.getData(controls);
    }

    this.setState({
      currentChartData: {
        data: this.props.data,
        ...controls[0]
      }
    });
  }

  renderControls() {
    let { currentChartData } = this.state;
    let { controls } = this.props;

    return controls.map((el) => {
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
    let { loading, error } = this.props;
    let { activePrice, activeTime, currentChartData } = this.state;

    return (
      <HistoricalChartStyled>
        {loading && <div style={{ color: 'white' }}>Loading ...</div>}

        {error && <div style={{ color: 'white' }}>Oops! something went wrong. Please refresh your page</div>}

        {currentChartData.data &&
          <div>
            <Header>
              <Value>
                <HoveredTime>{activeTime}</HoveredTime>
                <HoveredPrice>{activePrice}</HoveredPrice>
              </Value>
              <Contorls>
                ${this.renderControls()}
              </Contorls>
            </Header>
            <LineChart
              chartData={currentChartData}
              color={theme.colors.primary}
              onTooltipXChange={this.setTime}
              onTooltipYChange={this.setPrice}
            />
          </div>
        }
      </HistoricalChartStyled>
    );
  }
}

export default HistoricalChart;
