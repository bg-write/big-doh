import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<main>
				<h1>BIG D'OH: HOMER READS 'CRACKING THE CODING INTERVIEW'</h1>
				<hr />
				<img
					id="donut"
					class="loader"
					alt="donut"
					src="https://i.imgur.com/7NqMseE.jpg"
					width="100px"
				/>
				<p>
					If Homer can do it, so can you. No donuts were harmed in the making of
					this React app.
				</p>

				<ul>
					<li>
						<Link to="/big-o">Big O</Link>
					</li>
					<li>
						<Link to="/algorithms">Algorithms</Link>
					</li>
					<li>
						<Link to="/data-structures">Data Structures</Link>
					</li>
				</ul>
				<hr />
			</main>
		</>
	);
}

export default Home;
