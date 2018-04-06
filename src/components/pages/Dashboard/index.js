// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import { HistoricalChart } from 'containers';
import { Card, Navigation, DashboardTemplate } from 'components';

const HomePage = () => {
  return (
    <DashboardTemplate nav={<Navigation/>}>
      HomePage Content
    </DashboardTemplate>
  );
};

export default HomePage;
