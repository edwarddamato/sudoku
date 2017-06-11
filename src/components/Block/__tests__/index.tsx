import * as React from 'react';
import { Block } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const block = create(
    <Block />
  ).toJSON();
  expect(block).toMatchSnapshot();
});