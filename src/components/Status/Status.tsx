import * as React from 'react';
import './Status.scss';

type StateValue = number | Array<number>;
interface IState {
  readonly name: string;
  readonly value: StateValue;
}
interface IStatusProps { }
interface IStatusState {
  readonly currentBlock: IState;
  readonly currentCoords: IState;
  [key: string]: IState;
}

export class Status extends React.Component<IStatusProps, IStatusState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
      currentBlock: {
        name: 'Current Block',
        value: 0
      },
      currentCoords: {
        name: 'Current Coords',
        value: [0, 0]
      }
    };
  }

  componentDidMount () {
  }

  showStateValue (value: StateValue) {
    return typeof value === "number" ? value : value.join(', ')
  }

  getStatusItemFromStateKey (state: IStatusState, key: string) {
    return (<li key={key} className="status_list-item">
      <div className="status_item-label">{state[key].name}</div>
      <div className="status_item-value">{
        this.showStateValue(state[key].value)
      }</div>
    </li>);
  }

  render () {
    return (
      <div className="component_status">
        <ul className="status_list">
          {
            Object.keys(this.state).map(key => this.getStatusItemFromStateKey(this.state, key))
          }
        </ul>
      </div>
    );
  }
}

export default Status;
