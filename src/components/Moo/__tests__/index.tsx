import * as React from 'react';
import { Moo } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const moo = create(
    <Moo />
  ).toJSON();
  expect(moo).toMatchSnapshot();
});