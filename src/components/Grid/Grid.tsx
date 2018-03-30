import * as React from 'react';
import './Grid.scss';
import { Block } from '../Block/index';
import { BlockElement } from '../../types';
import * as R from 'ramda';

interface IState {
  blocks: BlockElement[];
}

export class Grid extends React.Component<any, IState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
      blocks: R.times<BlockElement>(this.createBlockElement.bind(this), 9)
    };
  }

  public render() {
    return <section className="component_grid">{this.state.blocks}</section>;
  }

  private createBlockElement(index: number): BlockElement {
    return <Block key={index} index={index} />;
  }
}

export default Grid;
