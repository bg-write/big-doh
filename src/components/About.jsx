import React from 'react';
import { Link } from 'react-router-dom';

function About() {
	return (
		<>
			<main>
				<h1>ABOUT</h1>
				<div>
					<Link to="/">Back To Home</Link>
				</div>
				<hr />
				<p>
					This app was created by{' '}
					<a href="https://github.com/bg-write">Brady Gerber</a>.{' '}
					<a href="https://www.linkedin.com/in/brady-gerber/">Say hello!</a>
				</p>
				<hr />
			</main>
		</>
	);
}

export default About;
