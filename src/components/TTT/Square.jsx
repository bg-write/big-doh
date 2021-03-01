import React from 'react';

const Square = ({ value, onClick }) => (
	<button onClick={onClick}>{value}</button>
);

export default Square;
