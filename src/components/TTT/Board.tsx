import React, { FunctionComponent } from 'react';
import { TBoardProps } from './TTTTypes';
const Square = React.lazy(() => import('./Square'));

const style = {
	border: '4px solid black',
	width: '260px',
	height: '255px',
	margin: '0 auto',
	display: 'grid',
	gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
};

const Board: FunctionComponent<TBoardProps> = ({ squares, onClick }) => (
	<div style={style}>
		{squares.map((square: any, i: any) => (
			<Square key={i} value={square} onClick={() => onClick(i)} />
		))}
	</div>
);

export default Board;
