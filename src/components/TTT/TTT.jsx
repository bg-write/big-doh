import React from 'react';
import Game from './Game';

function TTT() {
	return (
		<>
			<main className="white-background">
				<div id="ttt-container">
					<div id="ttt-headline" className="center-text border-text">
						<h1 id="ttt-headline-copy">TAKE A STUDY BREAK!</h1>
					</div>
					<div id="ttt-blurb" className="center-text">
						<p>Play Homer in some Tic-Tac-D'oh.</p>
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
