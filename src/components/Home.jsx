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
				<p>If Homer can do it, so can you.</p>
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

				<p>
					This free study aid was inspired by Gayle Laakmann McDowell's
					'Cracking the Coding Interview' (6th Edition) and is for anyone who is 
					preparing for a technical coding interview.
				</p>

				<hr />
			</main>
		</>
	);
}

export default Home;
