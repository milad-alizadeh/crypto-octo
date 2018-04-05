import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { Button } from 'components';

export const ControlsWrapper = styled.div`
  max-width: 100%;
  margin-top: auto;

  ${breakpoint('medium')`
    position: relative;
    top: 1rem;
  `}
`;

export const Contorls = styled.ul`
  display: flex;
`;

export const ButtonStyled = styled(Button)`
  margin-right: 1rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-right: 0;
  }

  ${breakpoint('medium')`
    margin-bottom: 0;
  `}
`;

class ChartControls extends Component {
  static propTypes = {
    setActiveControl: PropTypes.func,
    controls: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      timeUnit: PropTypes.string.isRequired,
      displayFormat: PropTypes.string.isRequired
    }))
  }

  constructor(props) {
    super(props);

    this.state = {
      activeControl: props.controls[0]
    };
  }

  componentDidMount() {
    this.props.setActiveControl(this.state.activeControl);
  }

  onControlClick(activeControl) {
    this.setState({
      activeControl
    });

    this.props.setActiveControl(activeControl);
  }

  renderControls(activeControl, controls) {
    return controls.map((control) => {
      let modifiers = ['small', 'circular'];

      if (activeControl === controls) {
        modifiers.push('primary');
      }

      return (
        <ButtonStyled
          key={control.label}
          tag="li"
          modifiers={modifiers}
          onClick={() => activeControl !== control ? this.onControlClick(control) : null}
          active={activeControl === control}
        >
          {control.label}
        </ButtonStyled>
      );
    });
  }

  render() {
    let { activeControl } = this.state;
    let { controls, setActiveControl } = this.props;

    return (
      <ControlsWrapper>
        <Contorls>
          { this.renderControls(activeControl, controls, setActiveControl) }
        </Contorls>
      </ControlsWrapper>
    );
  }
}

export default ChartControls;
