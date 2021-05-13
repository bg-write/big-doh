import React from 'react';
import Game from './Game';

function TTT() {
	return (
		<>
			<main className="white-background">
				<div id="ttt-container">
					<div id="ttt-headline" className="center-text border-text">
						<h1>TAKE A STUDY BREAK!</h1>
					</div>
					<div id="ttt-blurb" className="center-text">
						<p>Take a break. Play Homer in Tic-Tac-D'oh.</p>
					</div>
					<div id="ttt-game" className="center-text">
						<Game />
					</div>
				</div>
			</main>
		</>
	);
}

export default TTT;
