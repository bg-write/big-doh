import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<main>
				<div className="flex-container">
					<h1>If Homer can do it, so can you.</h1>
					<img
						id="donut"
						class="loader"
						alt="donut"
						src="https://i.imgur.com/7NqMseE.jpg"
						width="50%"
					/>
				</div>
				<hr />
				<div className="center-text">
					<p>WHAT IS BIG D'OH?</p>
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
					<div className="boarder">
						<Link to="/big-o">Big O</Link>
					</div>
					<div className="boarder">
						<Link to="/algorithms">Algorithms</Link>
					</div>
					<div className="boarder">
						<Link to="/data-structures">Data Structures</Link>
					</div>
				</div>
			</main>
		</>
	);
}

export default Home;
