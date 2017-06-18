import * as React from 'react';
import { Store } from '../../store';
import { CellHoverAction } from '../../store/actions';
import './Cell.scss';

export interface ICellProps { count: number }
export interface ICellState { }

export class Cell extends React.Component<ICellProps, ICellState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
    };

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e: React.MouseEvent<HTMLInputElement>): void {
    Store.Dispatch(CellHoverAction, e.type === 'mouseleave' ? -1 : this.props.count);
  }

  render () {
    return (
      <div className="component_game-cell">
        <input onMouseLeave={this.handleMouseMove} onMouseEnter={this.handleMouseMove} className="game-cell_input" maxLength={1} type="text" />
      </div>
    );
  }
}

export default Cell;
