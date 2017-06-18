import { DispatchAction } from './interfaces.d';
import { Action, CellHoverAction } from './actions';
import { createStore } from 'redux';

const execute = (action: DispatchAction, op: (StoreKey: any) => any): (StoreKey: any) => any => {
  const partialState = { [action.type.stateKey]: action.data };
  return op(partialState);
};

const reducer = (state: any, action: DispatchAction) => {
  const newState = execute(action, partialState => {
    return Object.assign({}, state, partialState);
  });
  return newState || state;
};

const store = createStore(reducer, {
  currentCell: -1
});

export class Store {
  public static Dispatch(action: Action, data: any): void {
    store.dispatch({ type: action, data });
  }
  public static GetState(action?: Action): any {
    if (action) {
      return store.getState()[action.stateKey];
    } else {
      return store.getState();
    }
  }
  public static GetCellHoverIndex(): number {
    return Store.GetState(CellHoverAction);
  }
  public static Subscribe(subscribe: () => any): void {
    store.subscribe(subscribe);
  }
}