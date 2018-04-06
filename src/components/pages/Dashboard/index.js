// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import { HistoricalChart } from 'containers';
import { Card, Navigation, DashboardTemplate } from 'components';

// let list = [
//   {
//     label: 'Dashboard',
//     icon: 'monitor',
//     to: '/',
//     exact: true,
//     activeClassName: 'current'
//   },
//   {
//     label: 'Watchlist',
//     icon: 'eye',
//     to: '/watchlist',
//     activeClassName: 'current'
//   },
//   {
//     label: 'Settings',
//     icon: 'cog',
//     to: '/settings',
//     activeClassName: 'current'
//   }
// ];


const HomePage = () => {
  return (
    <DashboardTemplate>
      HomePage Content
    </DashboardTemplate>
  );
};

export default HomePage;
