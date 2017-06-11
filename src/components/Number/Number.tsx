import * as React from 'react';
import './Number.scss';

export interface INumberProps { }
export interface INumberState { }

export class Number extends React.Component<INumberProps, INumberState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
    };
  }

  render () {
    return (
      <section className="component_game-number">
      </section>
    );
  }
}

export default Number;
