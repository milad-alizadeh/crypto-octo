// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import { HistoricalChart } from 'containers';
import { Card } from 'components';

const HomePage = () => {
  return (
    <Card heading="Portfolio Performance">
      <HistoricalChart />
    </Card>
  );
};

export default HomePage;
