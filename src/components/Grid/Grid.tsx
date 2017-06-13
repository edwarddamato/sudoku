import * as React from 'react';
import './Grid.scss';
import { Block } from '../Block/index';

interface IGridProps { }
interface IGridState {
  readonly blocks: Array<any>
}


export class Grid extends React.Component<IGridProps, IGridState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
      blocks: []
    };
  }
  
  componentDidMount () {
    let blocks = new Array<any>();
    for (let count = 0; count < 9; count++) blocks.push({});
    this.setState({ blocks });
  }

  render () {
    return (
      <section className="component_grid">
        {
          this.state.blocks.map((block, index) => <Block key={index} />)
        }
      </section>
    );
  }
}

export default Grid;
