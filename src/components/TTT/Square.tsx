import React, { FunctionComponent } from 'react';
import { TSquareProps } from './TTTTypes';

const style = {
	background: '#fed90f',
	border: '2px solid black',
	fontSize: '50px',
	cursor: 'pointer',
	outline: 'none',
};

const Square: FunctionComponent<TSquareProps> = ({ value, onClick }) => {
	return (
		<button style={style} onClick={onClick}>
			{value}
		</button>
	);
};

export default Square;
