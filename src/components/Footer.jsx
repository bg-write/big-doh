import React from 'react';
// import { Link } from 'react-router-dom';

function Footer() {
	return (
		<>
			<footer id="footer-container">
				<small>
					{/* ICEBOX: fix CSS Grid for footer in media query */}
					<div id="footer-grid">
						<div id="footer-internal-links">
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
						</div>

						<div id="blank"></div>
						<div id="footer-credit-brady-links">
							<p>
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
							</p>
						</div>
						<div id="blank"></div>
						<div id="blank"></div>
						<div id="footer-credit-molly-links">
							<p>
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
							</p>
						</div>
						<div id="footer-external-links">
							<p>
								All photos and gifs are taken from General Assembly except when
								linked to their original sources. All concepts inspired by Gayle
								Laakmann McDowell's 'Cracking the Coding Interview' (6th
								Edition).
							</p>
							<p>
								Other helpful links:
								<ul>
									<li>
										<a href="" target="_blank" rel="noopener noreferrer">
											Cracking the Coding Interview
										</a>
									</li>
									<li>
										<a href="" target="_blank" rel="noopener noreferrer">
											Eloquent JavaScript
										</a>
									</li>
									<li>
										<a href="" target="_blank" rel="noopener noreferrer">
											CSS Tricks
										</a>
									</li>
									<li>
										<a href="" target="_blank" rel="noopener noreferrer">
											Flexbox Frog
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
								</ul>
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
						</div>
					</div>
				</small>
			</footer>
		</>
	);
}

export default Footer;
