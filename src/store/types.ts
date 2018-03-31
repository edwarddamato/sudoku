export enum ActionStateKey {
  CURRENT_CELL,
  GRID_VALUES
}

export interface IAction {
  readonly stateKey: ActionStateKey;
}

export const CellHoverAction: IAction = {
  stateKey: ActionStateKey.CURRENT_CELL
};

export const GridValuesAction: IAction = {
  stateKey: ActionStateKey.GRID_VALUES
};

export interface IDispatchAction {
  readonly type: IAction;
  readonly data: ICellHoverActionData | IGridValuesActionData;
}
export interface ICellHoverActionData {
  readonly block: number;
  readonly cell: number;
  readonly coords: number[];
}

export interface IGridValuesActionData {
  readonly values: number[][];
}
