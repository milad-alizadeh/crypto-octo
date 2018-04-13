import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card } from 'components';

const LargeCard = styled(Card)`

`;

const WatchlistTemplateStyled = styled.div`
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
`;

const SmallCard = styled(Card)`
  background: ${({ theme }) => theme.colors.greyDark};
${'' /*
  @media (min-width: 620px) {
    grid-column: span 1;
  } */}
`;

const WatchlistTemplate = ({ data }) => {
  let { card1, card2 } = data;

  return (
    <WatchlistTemplateStyled>
      <SmallCard heading={card1.heading}>{card1.component}</SmallCard>
      <LargeCard heading={card2.heading}>{card2.component}</LargeCard>
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
