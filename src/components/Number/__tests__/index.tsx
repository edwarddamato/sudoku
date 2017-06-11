import * as React from 'react';
import { Number } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const number = create(
    <Number />
  ).toJSON();
  expect(number).toMatchSnapshot();
});