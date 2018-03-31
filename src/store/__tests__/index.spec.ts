import * as React from 'react';
import { ActionStateKey } from '../types';
import { Store } from '../';

describe('Store', () => {
  describe('Dispatch', () => {
    it.skip('should do something', () => {
      //
    });
  });

  describe('GetState', () => {
    it('should return all store state when no action is supplied', () => {
      expect(Store.GetState()).toEqual({
        [ActionStateKey.CURRENT_CELL]: {
          block: -1,
          cell: -1,
          coords: [-1, -1]
        },
        [ActionStateKey.GRID_VALUES]: {
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
        }
      });
    });
  });

  describe('Subscribe', () => {
    it.skip('should do something', () => {
      //
    });
  });

  describe('GetCellHoverIndex', () => {
    it.skip('should do something', () => {
      //
    });
  });

  describe('DispatchCellHoverAction', () => {
    it.skip('should do something', () => {
      //
    });
  });
});
