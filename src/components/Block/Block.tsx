import * as React from 'react';
import * as R from 'ramda';
import { Cell } from '../Cell/';
import { CellElement } from '../../types';
import './Block.scss';

interface IProps {
  index: number;
}

interface IState {
  cells: CellElement[];
}

export class Block extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      cells: R.times<CellElement>(this.createCellElement.bind(this), 9)
    };
  }

  public render() {
    return <div className="component_game-block">{this.state.cells}</div>;
  }

  private createCellElement(index: number): CellElement {
    return <Cell key={index} blockIndex={this.props.index} index={index} />;
  }
}

export default Block;
