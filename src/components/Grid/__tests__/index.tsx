import * as React from 'react';
import { Grid } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const grid = create(<Grid blocks={[]} />).toJSON();
  expect(grid).toMatchSnapshot();
});
