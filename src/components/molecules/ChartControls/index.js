import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from 'components';

const Contorls = styled.ul`
  display: flex;

  @media (min-width: 540px) {
    justify-content: flex-end;
  }
`;

const ButtonStyled = styled(Button)`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
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
      <Contorls>
        { this.renderControls(activeControl, controls, setActiveControl) }
      </Contorls>
    );
  }
}

export default ChartControls;
