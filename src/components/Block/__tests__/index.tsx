import * as React from 'react';
import { Block } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const block = create(
    <Block index={4} />
  ).toJSON();
  expect(block).toMatchSnapshot();
});