import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading } from 'components';

const CardStyled = styled.article`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.greyDarkest};
  background: ${({ theme }) => `linear-gradient(0deg, ${theme.colors.greyDarker} 0%, ${theme.colors.greyDark} 100%);`};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colors.greyLight};
  min-height: 40rem;
`;

const CardHeader = styled.header``;
const CardContent = styled.div``;

const Card = (props) => {
  let { title, children } = props;

  return (
    <CardStyled {...props}>
      {
        title &&
        <CardHeader>
          <Heading level={3}>{title}</Heading>
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
  title: PropTypes.string,
  children: PropTypes.node
};

export default Card;
