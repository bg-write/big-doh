const Home: React.FC = () => {
	return (
		<main>
			<div id="home-main">
				<div id="flex-container-home">
					<div id="homerText-container">
						<h1 id="homerText">
							IF HOMER <br />
							CAN DO IT, <br />
							YOU CAN <br />
							TOO.
						</h1>
					</div>
					<div id="donut-home-container" className="center-text">
						<img
							id="donut-home"
							className="donut loader"
							alt="donut"
							src="https://i.imgur.com/ske1xNn.png"
						/>
					</div>
				</div>

				<div className="marquee-holder">
					<div className="marquee">
						<ul className="marquee-content">
							{Array.from({ length: 13 }, (_, index) => (
								<li key={index}>CRACK THE CODING INTERVIEW!</li>
							))}
						</ul>
					</div>
				</div>

				<div id="home-intro" className="center-text">
					<div className="pill">
						<p className="border-text">
							BIG O? MORE LIKE BIG <i>D'OH</i>!
						</p>
					</div>
					<div>
						<p>
							Reading 'Cracking the Coding Interview' but still not getting Big O?
						</p>
						<p>
							<b>Big D'oh: Homer Reads Cracking the Coding Interview</b> is a free
							study guide for Big O notation and common algorithms and data structures,
							in a way even Homer Simpson could get.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
