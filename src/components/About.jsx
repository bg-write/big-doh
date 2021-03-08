import React from 'react';
import { Link } from 'react-router-dom';

function About() {
	return (
		<>
			<content>
				<h1>ABOUT</h1>
				<div>
					<Link to="/">Back To Home</Link>
				</div>
				<hr />
				<p>
					This app was created by Brady Gerber.{' '}
					<a href="https://github.com/bg-write">Say hello!</a>
				</p>
				<hr />
			</content>
		</>
	);
}

export default About;
