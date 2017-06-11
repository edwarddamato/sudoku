import * as React from 'react';
import './Moo.scss';

export interface IMooProps { }
export interface IMooState { }

export class Moo extends React.Component<IMooProps, IMooState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
    };
  }

  render () {
    return (
      <div className="component_moo">
        <div>Name: {this.state}</div>
        <div>Location: {this.state}</div>
        <div>Bio: {this.state}</div>
      </div>
    );
  }
}

export default Moo;
