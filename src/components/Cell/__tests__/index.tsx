import * as React from 'react';
import { Cell } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const number = create(
    <Cell count={55} />
  ).toJSON(); 
  expect(number).toMatchSnapshot();
});