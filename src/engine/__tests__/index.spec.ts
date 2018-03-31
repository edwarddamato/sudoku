import { setValueInGrid, generateRandomGrid, getRandomFrom1To9, validInList } from '../';

const wasRandonNumberGenerated = (expected: number): boolean => {
  if (getRandomFrom1To9() === expected) {
    return true;
  } else {
    return wasRandonNumberGenerated(expected);
  }
};

describe('engine', () => {
  describe('setValueInGrid', () => {
    it('should update the value for the specific index in the grid', () => {
      const existingGrid = [
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '']
      ];

      const newGrid = setValueInGrid(2, 7, existingGrid, '5');

      expect(newGrid).toEqual([
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '5', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '']
      ]);
    });
  });

  describe('getRandomFrom1To9', () => {
    it('should be able to generate any number between 1 to 9', () => {
      expect(wasRandonNumberGenerated(1)).toBe(true);
      expect(wasRandonNumberGenerated(2)).toBe(true);
      expect(wasRandonNumberGenerated(3)).toBe(true);
      expect(wasRandonNumberGenerated(4)).toBe(true);
      expect(wasRandonNumberGenerated(5)).toBe(true);
      expect(wasRandonNumberGenerated(6)).toBe(true);
      expect(wasRandonNumberGenerated(7)).toBe(true);
      expect(wasRandonNumberGenerated(8)).toBe(true);
      expect(wasRandonNumberGenerated(9)).toBe(true);
    });
  });

  describe('generateRandomGrid', () => {
    it('should generate a grid with random values', () => {
      const grid = generateRandomGrid();
      expect(grid).toEqual([
        [
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number)
        ],
        [
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number)
        ],
        [
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number)
        ],
        [
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number)
        ],
        [
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number)
        ],
        [
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number)
        ],
        [
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number)
        ],
        [
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number)
        ],
        [
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number),
          expect.any(Number)
        ]
      ]);
    });
  });

  describe('validInList', () => {
    it('should check whether given value exists in block', () => {
      expect(validInList('5', ['1', '2', '3', '4', '6', '7', '8', '9'])).toBe(true);
      expect(validInList('2', ['1', '2', '3', '4', '6', '7', '8', '9'])).toBe(false);
    });
  });
});
