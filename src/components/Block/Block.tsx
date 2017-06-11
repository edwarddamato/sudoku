import * as React from 'react';
import './Block.scss';
import { Number } from '../Number/index';

interface IBlockProps { }
interface IBlockState {
  readonly numbers: Array<any>
}

export class Block extends React.Component<IBlockProps, IBlockState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
      numbers: []
    };
  }


  componentDidMount () {
    let numbers = new Array<any>();
    for (let count = 0; count < 9; count++) numbers.push({});
    this.setState({ numbers });
  }

  render () {
    return (
      <section className="component_game-block">
        {
          this.state.numbers.map((number, index) => {
            return <Number key={index} />;
          })
        }
      </section>
    );
  }
}

export default Block;
