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
    onControlClick: PropTypes.func,
    controls: PropTypes.arrayOf(PropTypes.string),
    activeControl: PropTypes.string
  }

  onClick(control) {
    this.props.onControlClick(control);
  }

  renderControls(activeControl, controls) {
    return controls.map((control) => {
      let modifiers = ['small', 'circular'];

      if (activeControl === control) {
        modifiers.push('primary');
      }

      return (
        <ButtonStyled
          key={control}
          tag="li"
          modifiers={modifiers}
          onClick={() => activeControl !== control ? this.onClick(control) : null}
        >
          {control}
        </ButtonStyled>
      );
    });
  }

  render() {
    let { controls, activeControl } = this.props;

    return (
      <Contorls {...this.props}>
        { this.renderControls(activeControl, controls) }
      </Contorls>
    );
  }
}

export default ChartControls;
