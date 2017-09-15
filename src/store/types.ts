import { IStatusData } from '../types';

export interface IAction {
  readonly stateKey: string;
}
export interface IDispatchAction {
  readonly type: IAction;
  readonly data: IStatusData;
}