import React from 'react';

function Footer() {
	return (
		<>
			<footer id="footer-container">
				<div id="footer-grid">
					<div id="footer-internal-links">
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/big-o">Big O</a>
							</li>
							<li>
								<a href="/algorithms">Algorithms</a>
							</li>
							<li>
								<a href="/data-structures">Data Structures</a>
							</li>
							<li>
								<a href="/ttt">Study Break</a>
							</li>
						</ul>
					</div>

					<div id="blank"></div>
					<div id="footer-credit-brady-links">
						<i>Built by</i>
						<br></br>BRADY GERBER
						<div className="remove-underline">
							<a
								href="https://github.com/bg-write"
								target="_blank"
								rel="noopener noreferrer"
								className="symbol-font"
							>
								GITHUB
							</a>{' '}
							<a
								href="https://www.linkedin.com/in/brady-gerber/"
								target="_blank"
								rel="noopener noreferrer"
								className="symbol-font"
							>
								LINKEDIN
							</a>{' '}
							<a
								href="https://twitter.com/BradyWGerber"
								target="_blank"
								rel="noopener noreferrer"
								className="symbol-font"
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
					</div>
					<div id="blank"></div>
					<div id="blank"></div>
					<div id="footer-credit-molly-links">
						<i>Designed by</i>
						<br></br>MOLLY HODSON
						<div className="remove-underline">
							<a
								href="https://dribbble.com/mollyhodson"
								target="_blank"
								rel="noopener noreferrer"
								className="symbol-font"
							>
								DRIBBBLE
							</a>{' '}
							<a
								href="https://www.linkedin.com/in/molly-hodson/"
								target="_blank"
								rel="noopener noreferrer"
								className="symbol-font"
							>
								LINKEDIN
							</a>{' '}
							<a
								href="https://twitter.com/MollyHodson"
								target="_blank"
								rel="noopener noreferrer"
								className="symbol-font"
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
					</div>
					<div id="footer-external-links">
						<p>
							All photos and gifs are taken from General Assembly except when
							linked to their original sources.
						</p>
						<div>
							Other helpful links:
							<ul>
								<li>
									<a
										href="https://www.crackingthecodinginterview.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Cracking the Coding Interview
									</a>
								</li>
								<li>
									<a
										href="https://eloquentjavascript.net/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Eloquent JavaScript
									</a>
								</li>
								<li>
									<a
										href="https://css-tricks.com/almanac/"
										target="_blank"
										rel="noopener noreferrer"
									>
										CSS-Tricks
									</a>
								</li>
								<li>
									<a
										href="https://flexboxfroggy.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Flexbox Froggy
									</a>
								</li>
								<li>
									<a
										href="https://cssgridgarden.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Grid Garden
									</a>
								</li>
								<li>
									<a
										href="https://www.geeksforgeeks.org/"
										target="_blank"
										rel="noopener noreferrer"
									>
										GeeksforGeeks
									</a>
								</li>
								<li>
									<a
										href="https://www.freecodecamp.org/news/big-o-notation/"
										target="_blank"
										rel="noopener noreferrer"
									>
										freeCodeCamp
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/c/WebDevSimplified"
										target="_blank"
										rel="noopener noreferrer"
									>
										Web Dev Simplified
									</a>
								</li>
								<li>
									<a
										href="https://nickbulljs.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Nick Bull's 3-2-1 Newsletter
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/watch?v=sVZX0XvEBhk"
										target="_blank"
										rel="noopener noreferrer"
									>
										Coding Journey
									</a>
								</li>
								<li>
									<a
										href="https://leetcode.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										LeetCode
									</a>
								</li>
							</ul>
						</div>
						<small>
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
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
