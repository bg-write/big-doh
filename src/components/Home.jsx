import React from 'react';

function Home() {
	return (
		<>
			<main>
			<div id="home-main">
				<div id="flex-container-home">
					<div id="homerText-container">
						<h1 id="homerText">
							IF HOMER <br></br>CAN DO IT, <br></br>YOU CAN <br></br>TOO.
						</h1>
					</div>
					<div id="donut-home-container" className="center-text">
						<img
							id="donut-home"
							className="donut loader"
							alt="donut"
							src="https://i.imgur.com/ske1xNn.png"
							loading="lazy"
						/>
					</div>
				</div>

				<div className="marquee-holder">
					<div className="marquee">
						<ul className="marquee-content">
							<li>CRACK THE CODING INTERVIEW!</li>
							<li>CRACK THE CODING INTERVIEW!</li>
							<li>CRACK THE CODING INTERVIEW!</li>
							<li>CRACK THE CODING INTERVIEW!</li>
							<li>CRACK THE CODING INTERVIEW!</li>
							<li>CRACK THE CODING INTERVIEW!</li>
							<li>CRACK THE CODING INTERVIEW!</li>
							<li>CRACK THE CODING INTERVIEW!</li>
							<li>CRACK THE CODING INTERVIEW!</li>
							<li>CRACK THE CODING INTERVIEW!</li>
							<li>CRACK THE CODING INTERVIEW!</li>
							<li>CRACK THE CODING INTERVIEW!</li>
							<li>CRACK THE CODING INTERVIEW!</li>
						</ul>
					</div>
				</div>

				<div id="home-intro" className="center-text">
					<div className="pill">
						<p className="border-text">
							<b>
								BIG O? <br></br>MORE LIKE BIG <i>D'OH</i>!
							</b>
						</p>
					</div>
					<div>
						<p>
							Read 'Cracking the Coding Interview' but still not getting Big O?
						</p>
						<p>
							<b>Big D'oh: Homer Reads Cracking the Coding Interview</b> is a
							free study guide for Big O and common algorithms and data
							structures, in a way even Homer Simpson could get.
						</p>
						<p>
							All photos and gifs are taken from General Assembly except when
							linked to their original sources.
						</p>
					</div>
				</div>
				</div>
			</main>
		</>
	);
}

export default Home;
