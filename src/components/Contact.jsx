import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
	return (
		<>
			<main>
				<h1>CONTACT</h1>
				<div>
					<Link to="/">Back To Home</Link>
				</div>
				<hr />
				<img
					id="donut"
					class="loader"
					alt="donut"
					src="https://i.imgur.com/7NqMseE.jpg"
					width="100px"
				/>
				<p>
					This app was created by{' '}
					<a href="https://github.com/bg-write">Brady Gerber</a>.{' '}
					<a href="https://www.linkedin.com/in/brady-gerber/">Say hello!</a>
				</p>
				<p>
					<a href="https://github.com/bg-write">GitHub</a>
				</p>
				<p>
					<a href="https://www.linkedin.com/in/brady-gerber/">LinkedIn</a>
				</p>
				<p>
					<a href="https://twitter.com/BradyWGerber">Twitter</a>
				</p>
				<p>
					<a href="https://bradygerber.com/">Personal Website</a>
				</p>
				<p>Gmail: bradywgerber</p>
				<hr />
			</main>
		</>
	);
}

export default Contact;
