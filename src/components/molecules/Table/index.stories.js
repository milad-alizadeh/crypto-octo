import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '.';

storiesOf('Molecule - Table', module)
  .add('default', () => (
    <Table>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
      </tr>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
      </tr>
    </Table>
  ))
  .add('with head', () => (
    <Table
      head={
        <tr>
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
        </tr>
      }
    >
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
      </tr>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
      </tr>
    </Table>
  ));
