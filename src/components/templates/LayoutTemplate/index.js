import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';

const LayoutTemplateStyled = styled.div`
  display: grid;
  max-width: 100vw;
  min-height: 100vh;
  grid-template-rows: 5rem auto 1fr 5rem;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";
  ${breakpoint('xlarge')`
    grid-template-rows: 5rem 1fr 5rem;
    grid-template-columns: 18rem 1fr;
    grid-template-areas:
      "header header"
      "nav main"
      "nav footer";
  `}
`;

const Header = styled.header`
  grid-area: header;
  background: ${({ theme }) => theme.colors.greyDarker};

  ${breakpoint('xlarge')`
    background: ${({ theme }) => theme.colors.greyDark};
  `}
`;

const Nav = styled.nav`
  grid-area: nav;
  background: ${({ theme }) => theme.colors.greyDark};
`;

const Main = styled.main`
  grid-area: main;
`;

const Footer = styled.footer`
  grid-area: footer;
  background: ${({ theme }) => theme.colors.greyDark};
`;

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
