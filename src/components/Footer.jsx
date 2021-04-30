import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<>
			<footer>
				<p>
					<ul>
						<li>
							<Link to="/">Home</Link>
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
							<Link to="/ttt">Study Break</Link>
						</li>
					</ul>
					<small>
						<p>
							Created by{' '}
							<a
								href="https://bradygerber.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Brady Gerber
							</a>{' '}
							(Software Engineer) and{' '}
							<a
								href="https://www.mollyhodson.online/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Molly Hodson
							</a>{' '}
							(UX Designer).
						</p>
						<p>
							All photos and gifs are taken from General Assembly except when
							linked to original sources.
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
				</p>
			</footer>
		</>
	);
}

export default Footer;
