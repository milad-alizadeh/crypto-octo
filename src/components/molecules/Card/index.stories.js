import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';

storiesOf('Molecule - Card', module)
  .add('default', () => (
    <Card />
  ))
  .add('With heading', () => (
    <Card heading="Total Value of All Coins" />
  ))
  .add('With content', () => (
    <Card>Sample Content</Card>
  ))
  .add('With heading and content', () => (
    <Card heading="Total Value of All Coins">Sample Content</Card>
  ));
