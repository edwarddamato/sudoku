import { IAction, IDispatchAction } from './types';
import { CellHoverAction } from './actions';
import { IStatusData } from '../types';
import { createStore } from 'redux';

const execute = (action: IDispatchAction, op: (StoreKey: any) => any): (StoreKey: any) => any => {
  const partialState = { [action.type.stateKey]: action.data };
  return op(partialState);
};

const reducer = (state: any, action: IDispatchAction) => {
  const newState = execute(action, partialState => {
    return Object.assign({}, state, partialState);
  });
  return newState || state;
};

const store = createStore(reducer, {
  [CellHoverAction.stateKey]: { block: -1, cell: -1, coords: [-1, -1] }
});

export class Store {
  public static Dispatch(action: IAction, data: any): void {
    store.dispatch({ type: action, data });
  }

  public static GetState(action?: IAction): any {
    if (action) {
      return store.getState()[action.stateKey];
    } else {
      return store.getState();
    }
  }

  public static Subscribe(subscribe: () => any): void {
    store.subscribe(subscribe);
  }

  public static GetCellHoverIndex(): IStatusData {
    return Store.GetState(CellHoverAction);
  }
  public static DispatchCellHoverAction(data: IStatusData): void {
    return Store.Dispatch(CellHoverAction, data);
  }
}