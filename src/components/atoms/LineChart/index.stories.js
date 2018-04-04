import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import LineChart from '.';

let chartData = {
  data: [
    {
      x: moment.unix(1522360800).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7191.57
    }, {
      x: moment.unix(1522364400).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7106.62
    }, {
      x: moment.unix(1522368000).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6840.83
    }, {
      x: moment.unix(1522371600).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6900.48
    }, {
      x: moment.unix(1522375200).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6851.4
    }, {
      x: moment.unix(1522378800).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6876.19
    }, {
      x: moment.unix(1522382400).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6721.55
    }, {
      x: moment.unix(1522386000).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7134.32
    }, {
      x: moment.unix(1522389600).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7052.37
    }, {
      x: moment.unix(1522393200).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7217.03
    }, {
      x: moment.unix(1522396800).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7104.97
    }, {
      x: moment.unix(1522400400).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7041.75
    }, {
      x: moment.unix(1522404000).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6901.21
    }, {
      x: moment.unix(1522407600).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7030.43
    }, {
      x: moment.unix(1522411200).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7040.07
    }, {
      x: moment.unix(1522414800).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6894.75
    }, {
      x: moment.unix(1522418400).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6851.23
    }, {
      x: moment.unix(1522422000).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6801.32
    }, {
      x: moment.unix(1522425600).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6690.58
    }, {
      x: moment.unix(1522429200).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6736.64
    }, {
      x: moment.unix(1522432800).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6744.87
    }, {
      x: moment.unix(1522436400).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6829.14
    }, {
      x: moment.unix(1522440000).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6860.53
    }, {
      x: moment.unix(1522443600).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6927.48
    }, {
      x: moment.unix(1522447200).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6792.11
    }, {
      x: moment.unix(1522450800).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6853.76
    }, {
      x: moment.unix(1522454400).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7004.35
    }, {
      x: moment.unix(1522458000).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7092.68
    }, {
      x: moment.unix(1522461600).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7061.04
    }, {
      x: moment.unix(1522465200).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6981.88
    }, {
      x: moment.unix(1522468800).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7039.03
    }, {
      x: moment.unix(1522472400).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6929.35
    }, {
      x: moment.unix(1522476000).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6831.46
    }, {
      x: moment.unix(1522479600).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6836
    }, {
      x: moment.unix(1522483200).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6915.75
    }, {
      x: moment.unix(1522486800).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7025.5
    }, {
      x: moment.unix(1522490400).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7110.38
    }, {
      x: moment.unix(1522494000).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7104.39
    }, {
      x: moment.unix(1522497600).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7198.18
    }, {
      x: moment.unix(1522501200).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7053.37
    }, {
      x: moment.unix(1522504800).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7083.43
    }, {
      x: moment.unix(1522508400).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7063.22
    }, {
      x: moment.unix(1522512000).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7159.17
    }, {
      x: moment.unix(1522515600).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7130.39
    }, {
      x: moment.unix(1522519200).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7046.02
    }, {
      x: moment.unix(1522522800).format('MMMM Do YYYY, h:mm:ss a'),
      y: 7070.2
    }, {
      x: moment.unix(1522526400).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6920.18
    }, {
      x: moment.unix(1522530000).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6945.4
    }, {
      x: moment.unix(1522533600).format('MMMM Do YYYY, h:mm:ss a'),
      y: 6970.52
    }
  ]
};

storiesOf('Atom - LineChart', module)
  .add('default', () => (
    <LineChart
      chartData={{
        ...chartData,
        timeUnit: 'hour',
        displayFormat: 'dddd - ha'
      }}
    />
  ))
  .add('different color', () => (
    <LineChart
      color="#04aec6"
      chartData={{
        ...chartData,
        timeUnit: 'hour',
        displayFormat: 'dddd - ha'
      }}
    />
  ))
  .add('different time unit and format', () => (
    <LineChart
      color="#04aec6"
      chartData={{
        ...chartData,
        timeUnit: 'day',
        displayFormat: 'MMM DD'
      }}
    />
  ));
