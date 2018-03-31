jest.mock('../../../store', () => ({
  Store: {
    GetGridValues: () => ({
      values: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 3, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 5, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 8]
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
