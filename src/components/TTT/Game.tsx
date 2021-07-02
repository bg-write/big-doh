import React, { useState, Suspense } from 'react';
import { calculateWinner } from './helpers';
const Board = React.lazy(() => import('./Board'));

const styles = {
	width: '200px',
	margin: '20px auto',
};

const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = (i: any) => {
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = xIsNext ? 'X' : 'O';
		setBoard(boardCopy);
		setXIsNext(!xIsNext);
	};

	const renderMoves = () => (
		<button
			id="ttt-clear-board-button"
			className="border-text"
			onClick={() => setBoard(Array(9).fill(null))}
		>
			CLEAR THE BOARD
		</button>
	);

	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				<Board squares={board} onClick={handleClick} />
			</Suspense>
			<div style={styles}>
				<p>
					{winner
						? 'Winner: ' + winner
						: 'Next Player: ' + (xIsNext ? 'X' : 'O')}
				</p>
				{renderMoves()}
			</div>
		</>
	);
};

export default Game;
