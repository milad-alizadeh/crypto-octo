import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Text } from 'components';
import { NavLink } from 'react-router-dom';

const IconStyled = styled(Icon)``;
const TextStyled = styled(Text)``;

let IconWithLabelStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  cursor: pointer;
  transition-property: background;
  transition: ${({ theme }) => theme.transition.fast};

  ${IconStyled} {
    margin-bottom: 1rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.greyDarker}
  }

  &.current ${IconStyled} {
    color: ${({ theme }) => theme.colors.primary}
  }
`;

const IconWithLabel = (props) => {
  return (
    <IconWithLabelStyled {...props}>
      <IconStyled icon={props.icon} />
      <TextStyled>{props.label}</TextStyled>
    </IconWithLabelStyled>
  );
};

IconWithLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string
};

export default IconWithLabel;
