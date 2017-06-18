import { IAction } from './interfaces.d';

export const CellHoverAction: IAction = {
  stateKey: "currentCell"
}

export type Action = IAction;