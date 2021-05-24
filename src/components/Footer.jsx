import React from 'react';

function Footer() {
	return (
		<>
			<footer id="footer-container">
				<small>
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
						<ul>
							<li>
								Built by{' '}
								<a
									href="https://bradygerber.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Brady Gerber
								</a>
							</li>
							<li>
								Designed by{' '}
								<a
									href="https://www.mollyhodson.online/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Molly Hodson
								</a>
							</li>
						</ul>
						<div id="footer-external-links">
							<p>
								All photos and gifs are taken from General Assembly <br></br>
								except when linked to their original sources.
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
