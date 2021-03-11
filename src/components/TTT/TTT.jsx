import React from 'react';
import Game from './Game';
import { Link } from 'react-router-dom';

function TTT() {
	return (
		<>
			<main>
				<h1>STRESSED?</h1>
				<div>
					<Link to="/">Back To Home</Link>
				</div>
				<hr />
				<p>Take a break and play Homer in Tic-Tac-Toe. (Tic-Tac-D'oh.)</p>
				<Game />
			</main>
		</>
	);
}

export default TTT;
