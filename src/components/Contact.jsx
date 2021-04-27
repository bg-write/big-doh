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
				{/* <img
					id="donut"
					class="loader"
					alt="donut"
					src="https://i.imgur.com/7NqMseE.jpg"
					width="100px"
				/> */}
				<p>
					This app was a collaboration between{' '}
					<a
						href="https://bradygerber.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Brady Gerber
					</a>{' '}
					(Software Engineer) and{' '}
					<a
						href="https://www.mollyhodson.online/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Molly Hodson
					</a>{' '}
					(UX Designer).
				</p>
				<p>
					Brady:{' '}
					<a
						href="https://github.com/bg-write"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					,{' '}
					<a
						href="https://www.linkedin.com/in/brady-gerber/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
					,{' '}
					<a
						href="https://twitter.com/BradyWGerber"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>
					,{' '}
					<a
						href="https://bradygerber.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Website
					</a>
					, Gmail (bradywgerber)
				</p>
				<p>
					Molly:{' '}
					<a
						href="https://www.linkedin.com/in/molly-hodson/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
					,{' '}
					<a
						href="https://twitter.com/MollyHodson"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>
					,{' '}
					<a
						href="https://www.mollyhodson.online/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Website
					</a>
					, Gmail (mollyhodsononline)
				</p>
				<p>
					All photos and gifs are taken from General Assembly except when linked
					to their original sources.
				</p>
				<hr />
			</main>
		</>
	);
}

export default Contact;
