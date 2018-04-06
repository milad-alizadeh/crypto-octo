import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LayoutTemplate } from 'components';

const DashboardTemplateStyled = styled.div``;

const DashboardTemplate = ({ header, footer, nav, children }) => (
  <LayoutTemplate header={header} footer={footer} nav={nav}>
    <DashboardTemplateStyled>
      {children}
    </DashboardTemplateStyled>
  </LayoutTemplate>
);

DashboardTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  nav: PropTypes.node,
  children: PropTypes.node.isRequired
};

export default DashboardTemplate;
