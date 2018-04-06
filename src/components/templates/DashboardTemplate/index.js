import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { LayoutTemplate, Card, Text } from 'components';
import { HistoricalChart } from 'containers';

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

const DashboardTemplate = ({ header, footer, nav }) => (
  <LayoutTemplate header={header} footer={footer} nav={nav}>
    <DashboardTemplateStyled>
      <SmallCard heading="Total Value of All Coins">
        <Text size="medium">$36,500</Text>
      </SmallCard>

      <SmallCard heading="Realised Profit/Loss">
        <Text size="medium">$58,670.63</Text>
      </SmallCard>

      <SmallCard heading="acquisition cost">
        <Text size="medium">$12,000</Text>
      </SmallCard>

      <SmallCard heading="Change in the last 24h">
        <Text size="medium">$12,00</Text>
      </SmallCard>

      <LargeCard heading="Portfolio Performance" headingPosition="center">
        <HistoricalChart />
      </LargeCard>

      <MediumCard heading="Portfolio Distribution" headingPosition="center">
        <Text size="medium">Pie Chart Goes Here</Text>
      </MediumCard>

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
