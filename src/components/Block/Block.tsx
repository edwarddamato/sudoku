import * as React from 'react';
import './Block.scss';
import { Cell } from '../Cell/index';

interface IBlockProps { }
interface IBlockState {
  readonly cells: Array<any>
}

export class Block extends React.Component<IBlockProps, IBlockState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
      cells: []
    };
  }


  componentDidMount () {
    let cells = new Array<any>();
    for (let count = 0; count < 9; count++) cells.push({});
    this.setState({ cells });
  }

  render () {
    return (
      <div className="component_game-block">
        {
          this.state.cells.map((cell, index) => {
            return <Cell key={index} />;
          })
        }
      </div>
    );
  }
}

export default Block;
