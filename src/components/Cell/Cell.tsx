import * as React from 'react';
import './Cell.scss';

export interface ICellProps { }
export interface ICellState { }

export class Cell extends React.Component<ICellProps, ICellState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
    };
  }

  render () {
    return (
      <div className="component_game-cell">
        <input className="game-cell_input" type="number" />
      </div>
    );
  }
}

export default Cell;
