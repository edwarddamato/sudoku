import * as React from 'react';
import * as R from 'ramda';
import { Store } from '../../store';
import './Status.scss';

type StateValue = number | number[];

interface IStateProp {
  name: string;
  value: StateValue;
}

interface IState {
  currentCellIndex: IStateProp;
  currentBlock: IStateProp;
  currentCoords: IStateProp;
  [key: string]: IStateProp;
}

const showStateValue = (value: StateValue) => (typeof value === 'number' ? value : value.join(', '));

const getStatusItemFromStateKey = (state: IState) => (key: string) => (
  <li key={key} className="status_list-item">
    <div className="status_item-label">{state[key].name}</div>
    <div className="status_item-value">{showStateValue(state[key].value)}</div>
  </li>
);

const buildStatusFromState = (state: IState) => {
  const statusItemFromStateKey = getStatusItemFromStateKey(state);
  return R.compose(R.map(statusItemFromStateKey), R.keys)(state);
};

export class Status extends React.Component<any, IState> {
  constructor(props: undefined) {
    super(props);

    Store.Subscribe(() => {
      this.setState({
        currentBlock: { ...this.state.currentBlock, value: Store.GetCellHoverIndex().block },
        currentCellIndex: { ...this.state.currentCellIndex, value: Store.GetCellHoverIndex().cell },
        currentCoords: { ...this.state.currentCoords, value: Store.GetCellHoverIndex().coords }
      });
    });

    this.state = {
      currentBlock: {
        name: 'Current Block',
        value: -1
      },
      currentCellIndex: {
        name: 'Current Cell Index',
        value: -1
      },
      currentCoords: {
        name: 'Current Coords',
        value: [-1, -1]
      }
    };
  }

  public render() {
    return (
      <div className="component_status">
        <ul className="status_list">{buildStatusFromState(this.state)}</ul>
      </div>
    );
  }
}

export default Status;
