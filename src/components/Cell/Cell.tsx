import * as React from 'react';
import './Cell.scss';

export interface ICellProps { }
export interface ICellState { }

export class Cell extends React.Component<ICellProps, ICellState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter(e: React.MouseEvent<HTMLInputElement>): void {
    console.log(e);
  }

  render () {
    return (
      <div className="component_game-cell">
        <input onMouseEnter={this.handleMouseEnter} className="game-cell_input" maxLength={1} type="text" />
      </div>
    );
  }
}

export default Cell;
