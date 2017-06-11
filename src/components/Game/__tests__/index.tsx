import * as React from 'react';
import { Game } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const game = create(
    <Game />
  ).toJSON();
  expect(game).toMatchSnapshot();
});