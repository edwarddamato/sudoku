import * as React from 'react';
import { Moo } from '../Moo/index';
import './App.scss';

interface IAppState {
  readonly user?: string
}

export class App extends React.Component<undefined, IAppState> {
  constructor (props: undefined) {
    super(props);

    this.state = {
      user: undefined
    };
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="root_container">
        <h1>Let's get a Github user</h1>
        {
          this.state.user
          ? <Moo />
          : null
        }
      </div>
    );
  }
}

export default App;
