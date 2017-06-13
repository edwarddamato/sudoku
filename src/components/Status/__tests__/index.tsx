import * as React from 'react';
import { Status } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const status = create(
    <Status />
  ).toJSON();
  expect(status).toMatchSnapshot();
});