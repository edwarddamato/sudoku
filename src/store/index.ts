import * as R from 'ramda';
import {
  IAction,
  ActionStateKey,
  CellHoverAction,
  GridValuesAction,
  ICellHoverActionData,
  IGridValuesActionData,
  IDispatchAction
} from './types';
import { createStore } from 'redux';

interface IAppState {
  readonly [ActionStateKey.CURRENT_CELL]: ICellHoverActionData;
  readonly [ActionStateKey.GRID_VALUES]: IGridValuesActionData;
}

const initialState: IAppState = {
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
};

const stateKeyLens = R.lensPath(['type', 'stateKey']);
const getStateKeyWithLens = R.view<IDispatchAction, string>(stateKeyLens);

const execute = (action: IDispatchAction, mergeState: (x: Partial<IAppState>) => IAppState): Partial<IAppState> => {
  const stateKey = getStateKeyWithLens(action);
  const partialState = R.ifElse(
    R.isNil,
    () => R.identity({}),
    (actionStateKey: string) => ({ [actionStateKey]: action.data })
  )(stateKey);

  // console.log('==---=', action);
  return mergeState(partialState);
};

const reducer = (state: IAppState, action: IDispatchAction) => {
  const newState = execute(action, R.merge(state));
  return newState || state;
};

const store = createStore<Partial<IAppState>>(reducer, initialState);

export class Store {
  public static Dispatch(action: IAction, data: any): void {
    store.dispatch({ data, type: action });
  }

  public static GetState(action?: IAction): any {
    if (action) {
      return store.getState()[action.stateKey];
    }

    return store.getState();
  }

  public static Subscribe(subscribe: () => any): void {
    store.subscribe(subscribe);
  }

  public static GetCellHoverIndex(): ICellHoverActionData {
    return Store.GetState(CellHoverAction);
  }
  public static DispatchCellHoverAction(data: ICellHoverActionData): void {
    return Store.Dispatch(CellHoverAction, data);
  }

  public static GetGridValues(): IGridValuesActionData {
    return Store.GetState(GridValuesAction);
  }

  public static DispatchGridValuesAction(data: IGridValuesActionData): void {
    return Store.Dispatch(GridValuesAction, data);
  }
}
