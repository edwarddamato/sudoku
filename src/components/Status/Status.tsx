import * as React from 'react';
import * as R from 'ramda';
import { Store } from '../../store';
import './Status.scss';

type StateValue = number | Array<number>;

interface IState {
  name: string;
  value: StateValue;
}

interface State {
  currentCellIndex: IState;
  currentBlock: IState;
  currentCoords: IState;
  [key: string]: IState;
}

const showStateValue = (value: StateValue) => {
  return typeof value === "number" ? value : value.join(', ')
}

const getStatusItemFromStateKey = (state: State) => (key: string) => {
  return (<li key={key} className="status_list-item">
    <div className="status_item-label">{state[key].name}</div>
    <div className="status_item-value">{
      showStateValue(state[key].value)
    }</div>
  </li>);
}

const buildStatusFromState = (state: State) => {
  const statusItemFromStateKey = getStatusItemFromStateKey(state);
  return R.compose(R.map(statusItemFromStateKey), R.keys)(state);
};

export class Status extends React.Component<any, State> {
  constructor(props: undefined) {
    super(props);

    Store.Subscribe(() => {
      this.setState({
        currentCoords: { ...this.state.currentCoords, value: Store.GetCellHoverIndex().coords },
        currentCellIndex: { ...this.state.currentCellIndex, value: Store.GetCellHoverIndex().cell },
        currentBlock: { ...this.state.currentBlock, value: Store.GetCellHoverIndex().block },
      });
    });

    this.state = {
      currentCellIndex: {
        name: 'Current Cell Index',
        value: -1
      },
      currentBlock: {
        name: 'Current Block',
        value: -1
      },
      currentCoords: {
        name: 'Current Coords',
        value: [-1, -1]
      }
    };
  }

  render () {
    return (
      <div className="component_status">
        <ul className="status_list">
          {
            buildStatusFromState(this.state)
          }
        </ul>
      </div>
    );
  }
}

export default Status;
