import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
	return (
		<div>
			<h1>CONTACT</h1>
			<div>
				<Link to="/">Back To Home</Link>
			</div>
			<hr />
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
		</div>
	);
}

export default Contact;
