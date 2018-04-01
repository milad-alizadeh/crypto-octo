import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading } from 'components';

const CardStyled = styled.article`
  max-width: 700px;
  margin: auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.greyDarkest};
  background: ${({ theme }) => `linear-gradient(0deg, ${theme.colors.greyDarker} 0%, ${theme.colors.greyDark} 100%);`};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colors.greyLight};
`;

const CardHeader = styled.header`
  margin-bottom: 1rem;
`;
const CardContent = styled.div``;

const Card = (props) => {
  let { heading, children } = props;

  return (
    <CardStyled {...props}>
      {
        heading &&
        <CardHeader>
          <Heading level={3}>{heading}</Heading>
        </CardHeader>
      }
      {
        children &&
        <CardContent>{children}</CardContent>
      }
    </CardStyled>
  );
};

Card.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node
};

export default Card;
