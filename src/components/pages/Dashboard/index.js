// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import { AsyncChart } from 'hocs';
import { Text, DashboardTemplate, HistoricalChart, LineChart } from 'components';

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
    heading: 'Portfolio Performance'
  },
  card6: {
    heading: 'Distribution Chart',
    component: <Text size="medium">Pie Chart Goes Here</Text>
  }
};

let Chart = AsyncChart(LineChart);

const HomePage = () => {
  return (
    <Chart coinSymbol="BTC" toCurrency="GBP" />
  );
};

export default HomePage;
