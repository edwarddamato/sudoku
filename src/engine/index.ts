import * as R from 'ramda';

const setValueInGrid = (blockIndex: number, cellIndex: number, existingGridValues: number[][], newValue: string) => {
  const existingBlockIndex = existingGridValues[blockIndex];
  const newBlockIndex = R.set(R.lensIndex(cellIndex), newValue, existingBlockIndex);
  return R.set(R.lensIndex(blockIndex), newBlockIndex, existingGridValues);
};

export { setValueInGrid };
