import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import LineChart from '.';

let data = [
  {
    x: moment.unix(1522360800),
    y: 7191.57
  }, {
    x: moment.unix(1522364400),
    y: 7106.62
  }, {
    x: moment.unix(1522368000),
    y: 6840.83
  }, {
    x: moment.unix(1522371600),
    y: 6900.48
  }, {
    x: moment.unix(1522375200),
    y: 6851.4
  }, {
    x: moment.unix(1522378800),
    y: 6876.19
  }, {
    x: moment.unix(1522382400),
    y: 6721.55
  }, {
    x: moment.unix(1522386000),
    y: 7134.32
  }, {
    x: moment.unix(1522389600),
    y: 7052.37
  }, {
    x: moment.unix(1522393200),
    y: 7217.03
  }, {
    x: moment.unix(1522396800),
    y: 7104.97
  }, {
    x: moment.unix(1522400400),
    y: 7041.75
  }, {
    x: moment.unix(1522404000),
    y: 6901.21
  }, {
    x: moment.unix(1522407600),
    y: 7030.43
  }, {
    x: moment.unix(1522411200),
    y: 7040.07
  }, {
    x: moment.unix(1522414800),
    y: 6894.75
  }, {
    x: moment.unix(1522418400),
    y: 6851.23
  }, {
    x: moment.unix(1522422000),
    y: 6801.32
  }, {
    x: moment.unix(1522425600),
    y: 6690.58
  }, {
    x: moment.unix(1522429200),
    y: 6736.64
  }, {
    x: moment.unix(1522432800),
    y: 6744.87
  }, {
    x: moment.unix(1522436400),
    y: 6829.14
  }, {
    x: moment.unix(1522440000),
    y: 6860.53
  }, {
    x: moment.unix(1522443600),
    y: 6927.48
  }, {
    x: moment.unix(1522447200),
    y: 6792.11
  }, {
    x: moment.unix(1522450800),
    y: 6853.76
  }, {
    x: moment.unix(1522454400),
    y: 7004.35
  }, {
    x: moment.unix(1522458000),
    y: 7092.68
  }, {
    x: moment.unix(1522461600),
    y: 7061.04
  }, {
    x: moment.unix(1522465200),
    y: 6981.88
  }, {
    x: moment.unix(1522468800),
    y: 7039.03
  }, {
    x: moment.unix(1522472400),
    y: 6929.35
  }, {
    x: moment.unix(1522476000),
    y: 6831.46
  }, {
    x: moment.unix(1522479600),
    y: 6836
  }, {
    x: moment.unix(1522483200),
    y: 6915.75
  }, {
    x: moment.unix(1522486800),
    y: 7025.5
  }, {
    x: moment.unix(1522490400),
    y: 7110.38
  }, {
    x: moment.unix(1522494000),
    y: 7104.39
  }, {
    x: moment.unix(1522497600),
    y: 7198.18
  }, {
    x: moment.unix(1522501200),
    y: 7053.37
  }, {
    x: moment.unix(1522504800),
    y: 7083.43
  }, {
    x: moment.unix(1522508400),
    y: 7063.22
  }, {
    x: moment.unix(1522512000),
    y: 7159.17
  }, {
    x: moment.unix(1522515600),
    y: 7130.39
  }, {
    x: moment.unix(1522519200),
    y: 7046.02
  }, {
    x: moment.unix(1522522800),
    y: 7070.2
  }, {
    x: moment.unix(1522526400),
    y: 6920.18
  }, {
    x: moment.unix(1522530000),
    y: 6945.4
  }, {
    x: moment.unix(1522533600),
    y: 6970.52
  }
];

storiesOf('Atom - LineChart', module)
  .add('default', () => (
    <LineChart data={data} timeUnit="hour" displayFormat="dddd - ha" />
  ))
  .add('different color', () => (
    <LineChart data={data} color="#04aec6" timeUnit="hour" displayFormat="dddd - ha" />
  ))
  .add('different time unit and format', () => (
    <LineChart data={data} timeUnit="day" displayFormat="MMM DD" />
  ));
