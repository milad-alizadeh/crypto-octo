import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LayoutTemplateStyled = styled.div`
  display: grid;
`;

const Header = styled.header``;
const Main = styled.main``;
const Footer = styled.footer``;
const Nav = styled.nav``;

const LayoutTemplate = ({ header, footer, nav, children }) => {
  return (
    <LayoutTemplateStyled>
      <Header>{header}</Header>
      <Nav>{nav}</Nav>
      <Main>
        {children}
      </Main>
      <Footer>{footer}</Footer>
    </LayoutTemplateStyled>
  );
};

LayoutTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  nav: PropTypes.node,
  children: PropTypes.node.isRequired
};

export default LayoutTemplate;
