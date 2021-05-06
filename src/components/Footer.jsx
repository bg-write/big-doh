import React from 'react';
// import { Link } from 'react-router-dom';

function Footer() {
	return (
		<>
			<footer>
				<small>
					<p>
						<div>
							<a href="/">Home</a>
						</div>
						<div>
							<a href="/big-o">Big O</a>
						</div>
						<div>
							<a href="/algorithms">Algorithms</a>
						</div>
						<div>
							<a href="/data-structures">Data Structures</a>
						</div>
						<div>
							<a href="/ttt">Study Break</a>
						</div>
					</p>

					<p>
					'Big D'oh: Homer Reads Cracking the Coding Interview' was created by{' '}
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
						linked to their original sources. All concepts inspired by Gayle Laakmann
						McDowell's 'Cracking the Coding Interview' (6th Edition).
					</p>
					<p>Copyright &copy; Big D'oh 2021.</p>
					<p>
						{' '}
						<a
							href="https://www.house.gov/representatives/find-your-representative"
							target="_blank"
							rel="noopener noreferrer"
						>
							Find Your Local Representatives.
						</a>
					</p>
				</small>
			</footer>
		</>
	);
}

export default Footer;
