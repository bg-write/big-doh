import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<header>
				<ul class="nav justify-content-center nav-fill">
					<li class="nav-item">
						<Link to="/">Home</Link>
					</li>
					{/* <li class="nav-item">
						<Link to="/about">About</Link>
					</li> */}
					{/* <li class="nav-item">
						<Link to="/contact">Contact</Link>
					</li> */}
					<li class="nav-item">
						<Link to="/big-o">Big O</Link>
					</li>
					<li class="nav-item">
						<Link to="/algorithms">Algorithms</Link>
					</li>
					<li class="nav-item">
						<Link to="/data-structures">Data Structures</Link>
					</li>
					<li class="nav-item">
						<Link to="/ttt">Take a Break!</Link>
					</li>
				</ul>
			</header>
		</>
	);
}

export default Navbar;
