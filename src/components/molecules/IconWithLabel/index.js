import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Text } from 'components';

const IconStyled = styled(Icon)``;
const TextStyled = styled(Text)``;

let Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  cursor: pointer;

  ${IconStyled} {
    margin-bottom: 1rem;
  }

  &:hover ${IconStyled} {
    color: ${({ theme }) => theme.colors.primary}
  }
`;

const IconWithLabel = (props) => {
  Wrapper = Wrapper.withComponent(props.tag);

  return (
    <Wrapper {...props}>
      <IconStyled icon={props.icon} />
      <TextStyled>{props.label}</TextStyled>
    </Wrapper>
  );
};

IconWithLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tag: PropTypes.string
};

IconWithLabel.defaultProps = {
  tag: 'div'
};

export default IconWithLabel;
