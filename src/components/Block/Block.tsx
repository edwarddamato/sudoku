import * as React from 'react';
import * as R from 'ramda';
import { Cell } from '../Cell/';
import { CellElement } from '../../types'
import './Block.scss';

interface Props {
  index: number;
}

interface State {
  cells: Array<CellElement>;
}

export class Block extends React.Component<Props, State> {
  constructor(props: undefined) {
    super(props);

    this.state = {
      cells: R.times<CellElement>(this.createCellElement.bind(this), 9)
    };
  }

  private createCellElement(index: number): CellElement {
    return <Cell key={index} blockIndex={this.props.index} index={index} />;
  }

  render () {
    return (
      <div className="component_game-block">
        { this.state.cells }
      </div>
    );
  }
}

export default Block;
