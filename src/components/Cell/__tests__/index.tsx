jest.mock('../../../store', () => ({
  Store: {
    GetGridValues: () => ({
      values: [
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '']
      ]
    }),
    Subscribe: () => ({})
  }
}));

import * as React from 'react';
import { Cell } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const cell = create(<Cell blockIndex={5} index={5} onChange={() => ({})} />).toJSON();
  expect(cell).toMatchSnapshot();
});
