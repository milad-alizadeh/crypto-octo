import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '.';

storiesOf('Atom - Heading', module)
  .add('default', () => (
    <Heading>Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  ))
  .add('color', () => (
    <Heading color="primary">Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  ))
  .add('level 2', () => (
    <Heading level={2}>Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  ))
  .add('level 3', () => (
    <Heading level={3}>Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  ));
