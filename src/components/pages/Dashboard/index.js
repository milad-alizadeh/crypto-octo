// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import { HistoricalChart } from 'containers';
import { Text, Navigation, DashboardTemplate } from 'components';

let data = {
  footer: '',
  header: '',
  card1: {
    heading: 'Total Value of All Coins',
    component: <Text size="medium">$36,500</Text>
  },
  card2: {
    heading: 'Realised Profit/Loss',
    component: <Text size="medium">$58,670.63</Text>
  },
  card3: {
    heading: 'Acquisition cost',
    component: <Text size="medium">$36,500</Text>
  },
  card4: {
    heading: 'Change in the last 24h',
    component: <Text size="medium">$36,500</Text>
  },
  card5: {
    heading: 'Portfolio Performance',
    // component: <HistoricalChart />
  },
  card6: {
    heading: 'Distribution Chart',
    component: <Text size="medium">Pie Chart Goes Here</Text>
  }
};

const HomePage = () => {
  return (
    <DashboardTemplate
      nav={<Navigation />}
      data={data}
    />
  );
};

export default HomePage;
