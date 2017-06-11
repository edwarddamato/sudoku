import * as React from 'react';
import { Grid } from '../Grid/index';
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
        {
          <Grid />
        }
      </div>
    );
  }
}

export default App;
