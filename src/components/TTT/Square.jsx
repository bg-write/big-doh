import React from 'react';

const style = {
	background: '#fed90f',
	border: '2px solid black',
	fontSize: '50px',
	fontWeight: '800',
	cursor: 'pointer',
	outline: 'none',
};

const Square = ({ value, onClick }) => (
	<button style={style} onClick={onClick}>
		{value}
	</button>
);

export default Square;
