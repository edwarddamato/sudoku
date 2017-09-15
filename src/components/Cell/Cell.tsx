import * as React from 'react';
import { Store } from '../../store';
import { CellHoverAction } from '../../store/actions';
import { IStatusData } from '../../types/';
import './Cell.scss';

interface Props {
  blockIndex: number;
  index: number;
}

export class Cell extends React.Component<Props, any> {
  constructor(props: undefined) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e: React.FocusEvent<HTMLInputElement>): void {
    Store.DispatchCellHoverAction(e.type === 'mouseleave'
      ? { block: -1, cell: -1 }
      : { block: this.props.blockIndex, cell: this.props.index });
  }

  render () {
    return (
      <div className="component_game-cell">
        <input
          onFocus={this.handleMouseMove}
          onBlur={this.handleMouseMove}
          className="game-cell_input"
          maxLength={1}
          type="text" />
      </div>
    );
  }
}

export default Cell;
