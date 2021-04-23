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
				<img
					id="donut"
					class="loader"
					alt="donut"
					src="https://i.imgur.com/7NqMseE.jpg"
					width="100px"
				/>
				<p>
					<i>Take a break and play Homer in Tic-Tac-D'oh.</i>
				</p>
				<Game />
			</main>
		</>
	);
}

export default TTT;
