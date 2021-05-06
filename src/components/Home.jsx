import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<main>
				<div id="flex-container-home">
					<h1 id="homerText">
						IF HOMER CAN DO IT<br></br>YOU CAN TOO.
					</h1>
					<img
						class="donut loader"
						alt="donut"
						src="https://i.imgur.com/ske1xNn.png"
						width="50%"
					/>
				</div>
				<div>
					<p id="marquee">
						CRACK THE CODING INTERVIEW
					</p>
				</div>
				<div className="center-text">
					<p className="border-text">
						BIG O? MORE LIKE BIG <i>D'OH</i>!
					</p>
					<p>
						Read 'Cracking the Coding Interview' but still
						struggling with Big O?
					</p>
					<p>
						<b>Big D'oh: Homer Reads Cracking the Coding Interview</b> is a free
						study guide for Big O and common algorithms and
						data structures, in a way even Homer Simpson could get.
					</p>
				</div>

				{/* <div className="flex-container center-text">
					<div className="border-text">
						<a href="/big-o">Big O</a>
					</div>
					<div className="border-text">
						<a href="/algorithms">Algorithms</a>
					</div>
					<div className="border-text">
						<a href="/data-structures">Data Structures</a>
					</div>
				</div> */}
			</main>
		</>
	);
}

export default Home;
