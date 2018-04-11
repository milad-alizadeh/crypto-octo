import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchInput from '.';

storiesOf('Molecule - SearchInput', module)
  .add('default', () => (
    <SearchInput
      icon="magnifying-glass"
      placeholder="Search Coin"
      onInputChange={action('Input changed')}
      onSubmit={action('Submit button clicked')}
    />
  ));
