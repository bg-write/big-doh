const Footer = () => {
	return (
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
					<div id="footer-external-links">
						<ul>
							<li>
								Built by{' '}
								<a
									href="https://bradygerber.com/"
									target="_blank"
									rel="noopener noreferrer">
									Brady Gerber
								</a>
							</li>
							<li>
								Designed by{' '}
								<a
									href="https://mollyhodson.design/"
									target="_blank"
									rel="noopener noreferrer">
									Molly Hodson
								</a>
							</li>
						</ul>
					</div>
					<div id="footer-copyright">
						<p>Click on photos and gifs for original sources.</p>
						<p>Copyright &copy; Big D'oh 2023.</p>
						<p>
							{' '}
							<a
								href="https://www.house.gov/representatives/find-your-representative"
								target="_blank"
								rel="noopener noreferrer">
								Find Your Local Representatives.
							</a>
						</p>
					</div>
				</div>
			</small>
		</footer>
	);
};

export default Footer;
