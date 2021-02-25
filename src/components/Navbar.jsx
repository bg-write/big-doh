import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<img src="https://i.imgur.com/22Hi6M0.jpg" alt="homer" width="50%" />
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/big-o">Big O</Link>
				</li>
				<li>
					<Link to="/algorithms">Algorithms</Link>
				</li>
				<li>
					<Link to="/data-structures">Data Structures</Link>
				</li>
				<li>
					<Link to="/ttt">Stressed?</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
