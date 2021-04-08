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
					This app was a collaboration between{' '}
					<a href="https://bradygerber.com/">Brady Gerber</a> (Software
					Engineer) and{' '}
					<a href="https://www.mollyhodson.online/">Molly Hodson</a> (UX
					Designer). Brady Gerber.
				</p>
				<p>
					Brady: <a href="https://github.com/bg-write">GitHub</a>,{' '}
					<a href="https://www.linkedin.com/in/brady-gerber/">LinkedIn</a>,{' '}
					<a href="https://twitter.com/BradyWGerber">Twitter</a>,{' '}
					<a href="https://bradygerber.com/">Website</a>, Gmail (bradywgerber)
				</p>
				<p>
					Molly:{' '}
					<a href="https://www.linkedin.com/in/molly-hodson/">LinkedIn</a>,{' '}
					<a href="https://twitter.com/MollyHodson">Twitter</a>,{' '}
					<a href="https://www.mollyhodson.online/">Website</a>, Gmail
					(mollyhodsononline)
				</p>
				<hr />
			</main>
		</>
	);
}

export default Contact;
