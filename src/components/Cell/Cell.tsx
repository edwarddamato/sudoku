import * as React from 'react';
import * as R from 'ramda';
import { Store } from '../../store';
import { setValueInGrid } from '../../engine';
import './Cell.scss';

interface IProps {
  blockIndex: number;
  index: number;
  onChange: (index: number, value: string) => void;
}

interface IState {
  blockIndex: number;
  cellIndex: number;
  coords: number[];
  value: string;
}

export class Cell extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleFocusEvent = this.handleFocusEvent.bind(this);

    this.state = {
      blockIndex: -1,
      cellIndex: -1,
      coords: [-1, -1],
      value: ''
    };

    Store.Subscribe(() => {
      this.setState({
        value: Store.GetGridValues().values[this.state.blockIndex][this.state.cellIndex].toString()
      });
    });
  }

  public componentDidMount() {
    const cellIndex = this.props.index;
    const blockIndex = this.props.blockIndex;

    let x = -1;
    let y = -1;

    x = cellIndex - Math.trunc(cellIndex / 3) * 3 + (blockIndex - Math.trunc(blockIndex / 3) * 3) * 3;
    y = Math.trunc(cellIndex / 3) + Math.trunc(blockIndex / 3) * 3;

    this.setState({
      blockIndex,
      cellIndex,
      coords: [x, y],
      value: Store.GetGridValues().values[blockIndex][cellIndex].toString()
    });
  }

  public render() {
    return (
      <div className="component_game-cell">
        <input
          onFocus={this.handleFocusEvent}
          onBlur={this.handleFocusEvent}
          onChange={this.handleChangeEvent}
          className="game-cell_input"
          maxLength={1}
          type="text"
          value={this.state.value}
          placeholder={'0'}
        />
      </div>
    );
  }

  private handleChangeEvent(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    const value = e.target.value;
    this.setState({ value });

    const existingGridValues = Store.GetGridValues().values;
    const newGridValues = setValueInGrid(this.state.blockIndex, this.state.cellIndex, existingGridValues, value);

    Store.DispatchGridValuesAction({ values: newGridValues });

    // this.props.onChange(this.props.index, e.target.value);
  }

  private handleFocusEvent(e: React.FocusEvent<HTMLInputElement>): void {
    Store.DispatchCellHoverAction(
      e.type === 'blur'
        ? { block: -1, cell: -1, coords: [-1, -1] }
        : { block: this.state.blockIndex, cell: this.state.cellIndex, coords: this.state.coords }
    );
  }
}

export default Cell;
