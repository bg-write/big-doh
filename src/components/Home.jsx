import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<main>
				<div id="flex-container-home">
					<h1 id="homerText">
						If Homer can do it,<br></br>so can you.
					</h1>
					<img
						class="donut loader"
						alt="donut"
						src="https://i.imgur.com/7NqMseE.jpg"
						width="50%"
					/>
				</div>
				<hr />
				<div className="center-text">
					<p className="border-text">WHAT IS BIG D'OH?</p>
					<p>
						Have you read 'Cracking the Coding Interview' but are still
						struggling with Big O?
					</p>
					<p>
						This free study guide is for anyone wishing to study Big O and
						common algorithms and data structures, in a way even Homer Simpson
						could understand.
					</p>
				</div>
				<hr />
				<div className="flex-container center-text">
					<div className="border-text">
						<a href="/big-o">Big O</a>
					</div>
					<div className="border-text">
						<a href="/algorithms">Algorithms</a>
					</div>
					<div className="border-text">
						<a href="/data-structures">Data Structures</a>
					</div>
				</div>
			</main>
		</>
	);
}

export default Home;
