import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardStyled = styled.article`
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.greyDarker};
  background: ${({ theme }) => `linear-gradient(0deg, ${theme.colors.greyDarker} 0%, ${theme.colors.greyDark} 100%);`};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colors.greyLight};

  @media (min-width:360px) {
    padding: 2rem;
  }
`;

const HeadingStyled = styled.div`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.4rem;
  margin: 0;
  color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.greyLight};
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
  display: flex;
`;

const CardContent = styled.div`
  margin-top: auto;
`;

const Card = (props) => {
  let { heading, children } = props;

  return (
    <CardStyled {...props}>
      {
        heading &&
        <CardHeader>
          <HeadingStyled {...props}>{heading}</HeadingStyled>
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
