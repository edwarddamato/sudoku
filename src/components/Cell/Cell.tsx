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

    this.handleFocusEvent = this.handleFocusEvent.bind(this);
  }

  handleFocusEvent(e: React.FocusEvent<HTMLInputElement>): void {
    const cellIndex = this.props.index;
    const blockIndex = this.props.blockIndex;

    let x = -1;
    let y = -1;

    x = cellIndex - (Math.trunc(cellIndex / 3) * 3) + ((blockIndex - (Math.trunc(blockIndex / 3) * 3)) * 3);
    y = Math.trunc(cellIndex / 3) + Math.trunc(blockIndex / 3) * 3;

    Store.DispatchCellHoverAction(e.type === 'blur'
      ? { block: -1, cell: -1., coords: [-1, -1] }
      : { block: blockIndex, cell: cellIndex, coords: [x, y] });
  }

  render () {
    return (
      <div className="component_game-cell">
        <input
          onFocus={this.handleFocusEvent}
          onBlur={this.handleFocusEvent}
          className="game-cell_input"
          maxLength={1}
          type="text" />
      </div>
    );
  }
}

export default Cell;
