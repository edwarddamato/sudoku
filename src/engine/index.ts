import * as R from 'ramda';

const setValueInGrid = (blockIndex: number, cellIndex: number, existingGridValues: string[][], newValue: string) => {
  const existingBlockIndex = existingGridValues[blockIndex];
  const newBlockIndex = R.set(R.lensIndex(cellIndex), newValue, existingBlockIndex);
  return R.set(R.lensIndex(blockIndex), newBlockIndex, existingGridValues);
};

const getRandomFrom1To9 = () => Math.round(Math.random() * (9 - 1) + 1);

const generateCells = (cellIndex: number, cells: string[]): string[] => {
  if (cellIndex > 8) {
    return cells;
  }

  return generateCells(cellIndex + 1, R.append(getRandomFrom1To9(), cells));
};

const generateBlocks = (blockIndex: number, blocks: string[][]): string[][] => {
  if (blockIndex > 8) {
    return blocks;
  }

  return generateBlocks(blockIndex + 1, R.append(generateCells(0, []), blocks));
};

const validInList = (value: string, block: string[]) => R.none(R.equals(value), block);

// const validateValue = (blockIndex, value, grid: string[][]): boolean => {
//   grid[blockIndex]
//   return false;
// };

const generateRandomGrid = () => {
  const values = generateBlocks(0, []);
  return values;
};

export { setValueInGrid, generateRandomGrid, getRandomFrom1To9, validInList };
