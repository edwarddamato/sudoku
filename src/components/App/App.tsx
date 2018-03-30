import * as React from 'react';
import { Status } from '../Status/';
import { Grid } from '../Grid/';
import { Block } from '../Block';
import { Cell } from '../Cell';
import { BlockElement, CellElement } from '../../types';
import './App.scss';

export class App extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className="root_container">
        <Status />
        <Grid />
      </div>
    );
  }
}

export default App;
