import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card } from 'components';

const WatchlistTemplateStyled = styled.div`

`;

const WatchlistTemplate = ({ data }) => {
  return (
    <WatchlistTemplateStyled>
      <Card heading="Currently Held Coins">
        Coin Table Goes Here
      </Card>
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
