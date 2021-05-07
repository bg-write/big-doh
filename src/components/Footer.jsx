import React from 'react';
// import { Link } from 'react-router-dom';

function Footer() {
	return (
		<>
			<footer id="footer-container">
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
						<i>Built by</i>
						<br></br>BRADY GERBER
						<div className="remove-underline">
							<a
								href="https://github.com/bg-write"
								target="_blank"
								rel="noopener noreferrer"
							>
								GITHUB
							</a>{' '}
							<a
								href="https://www.linkedin.com/in/brady-gerber/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LINKEDIN
							</a>{' '}
							<a
								href="https://twitter.com/BradyWGerber"
								target="_blank"
								rel="noopener noreferrer"
							>
								TWITTER
							</a>
						</div>
						<a
							href="https://bradygerber.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Website
						</a>
						<br></br>Gmail (
						<a
							href="mailto:bradywgerber@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							bradywgerber
						</a>
						)
					</p>

					<p>
						<i>Designed by</i>
						<br></br>MOLLY HODSON
						<div className="remove-underline">
							<a
								href="https://dribbble.com/mollyhodson"
								target="_blank"
								rel="noopener noreferrer"
							>
								DRIBBBLE
							</a>{' '}
							<a
								href="https://www.linkedin.com/in/molly-hodson/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LINKEDIN
							</a>{' '}
							<a
								href="https://twitter.com/MollyHodson"
								target="_blank"
								rel="noopener noreferrer"
							>
								TWITTER
							</a>
						</div>
						<a
							href="https://www.mollyhodson.online/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Website
						</a>
						<br></br>Gmail (
						<a
							href="mailto:mollyphodson@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							mollyhodsononline
						</a>
						)
					</p>

					<p>
						All photos and gifs are taken from General Assembly except when
						linked to their original sources. All concepts inspired by Gayle
						Laakmann McDowell's 'Cracking the Coding Interview' (6th Edition).
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
