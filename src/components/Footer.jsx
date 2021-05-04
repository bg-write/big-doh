import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<>
			<footer>
				<small>
					<p>
						<div>
							<Link to="/">Home</Link>
						</div>
						<div>
							<Link to="/big-o">Big O</Link>
						</div>
						<div>
							<Link to="/algorithms">Algorithms</Link>
						</div>
						<div>
							<Link to="/data-structures">Data Structures</Link>
						</div>
						<div>
							<Link to="/ttt">Study Break</Link>
						</div>
					</p>

					<p>
						Created by{' '}
						<a
							href="https://bradygerber.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Brady Gerber
						</a>{' '}
						&{' '}
						<a
							href="https://www.mollyhodson.online/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Molly Hodson
						</a>
						.
					</p>
					<p>
						All photos and gifs are taken from General Assembly except when
						linked to original sources. All concepts inspired by Gayle Laakmann
						McDowell's 'Cracking the Coding Interview' (6th Edition).
					</p>
					<p>Copyright &copy; Big D'oh 2021</p>
					<p>
						{' '}
						<a
							href="https://www.house.gov/representatives/find-your-representative"
							target="_blank"
							rel="noopener noreferrer"
						>
							Find Your Local Representatives
						</a>
					</p>
				</small>
			</footer>
		</>
	);
}

export default Footer;
