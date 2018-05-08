// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import { AsyncChart } from 'hocs';
import { Text, DashboardTemplate, HistoricalChart } from 'components';

const Chart = AsyncChart(HistoricalChart);

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
    component: <Chart coinName="ETH" toCurrency="USD" controls={['1d', '1w', '6m']} color="#f39c12" />
  },
  card6: {
    heading: 'Distribution Chart',
    component: <Chart coinName="BTC" toCurrency="USD" controls={['1d', '3d', '1w']} />
  }
};

const HomePage = () => {
  return (
    <DashboardTemplate data={data} />
  );
};

export default HomePage;
