import { Block } from '../components/Block';
import { Cell } from '../components/Cell';

export type BlockElement = React.ReactElement<Block>;
export type CellElement = React.ReactElement<Cell>;

export interface IStatusData { block: number; cell: number; coords: Array<number> }