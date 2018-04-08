import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card } from 'components';

const WatchlistTemplateStyled = styled.div`
  padding: 2rem;
`;

const WatchlistTemplate = ({ data }) => {
  let { card1 } = data;

  return (
    <WatchlistTemplateStyled>
      <Card heading={card1.heading}>{card1.component}</Card>
    </WatchlistTemplateStyled>
  );
};

WatchlistTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  nav: PropTypes.node,
  data: PropTypes.object
};

export default WatchlistTemplate;
