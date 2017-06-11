import * as React from 'react';
import './Game.scss';
import { Block } from '../Block/index';

interface IGameProps { }
interface IGameState {
  readonly blocks: Array<any>
}


export class Game extends React.Component<IGameProps, IGameState> {
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
      <section className="component_game">
        {
          this.state.blocks.map((block, index) => {
            return <Block key={index} />;
          })
        }
      </section>
    );
  }
}

export default Game;
