import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TagStyled = styled.li`
  border-radius: 50;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: 1.2rem;
  min-width: .8rem;
  line-height: 1;
  padding: 1rem;
`;

const Tag = props => (
  <TagStyled {...props}>{props.children}</TagStyled>
);

Tag.propTypes = {
  children: PropTypes.node
};

export default Tag;
