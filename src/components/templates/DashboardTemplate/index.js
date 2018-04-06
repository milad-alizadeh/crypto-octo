import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Card } from 'components';

const DashboardTemplateStyled = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 620px) {
    grid-template-columns: repeat(8, 1fr);
  }

  ${breakpoint('medium')`
    grid-gap: 2rem;
    padding: 2rem;
  `}
`;

const SmallCard = styled(Card)`
  background: ${({ theme }) => theme.colors.greyDark};

  @media (min-width: 620px) {
    grid-column: span 2;
  }
`;

const MediumCard = styled(Card)`
  grid-column: 1 / -1;

  ${breakpoint('large')`
    grid-column: span 3;
    order: 1;
  `}
`;

const LargeCard = styled(Card)`
  grid-column: 1 / -1;

  ${breakpoint('large')`
    grid-column: span 5;
    order: 2;
  `}
`;

const DashboardTemplate = ({ data }) => {
  return (
    <DashboardTemplateStyled>
      <SmallCard heading={data.card1.heading}>{data.card1.component}</SmallCard>
      <SmallCard heading={data.card2.heading}>{data.card2.component}</SmallCard>
      <SmallCard heading={data.card3.heading}>{data.card3.component}</SmallCard>
      <SmallCard heading={data.card4.heading}>{data.card4.component}</SmallCard>
      <LargeCard heading={data.card5.heading}>{data.card5.component}</LargeCard>
      <MediumCard heading={data.card6.heading}>{data.card6.component}</MediumCard>
    </DashboardTemplateStyled>
  );
};

DashboardTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default DashboardTemplate;
