import React from 'react';
import { Link } from 'react-router-dom';

function BigO() {
	return (
		<>
			<main>
				<h1>BIG O</h1>
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
					<i>
						<b>Big O Notation</b> - How efficient is your algorithm. Based on
						run time (how many steps do you have to take?) and space (how much
						memory do you need?).
					</i>
				</p>
				<a href="https://www.bigocheatsheet.com/">
					<img
						id="bigO"
						alt="Big O"
						src="https://i.imgur.com/q2GTKn3.png"
						width="95%"
					/>
				</a>

				<h2>O(1) - Constant</h2>
				<p>
					When the input doesn't matter; if you add 1 or 1,000 values,the
					algorithm still just takes one "step."
				</p>
				<hr />

				<h2>O(log N) - Logarithmic</h2>
				<p>
					Cut the problem in half each time; look up a name in the phone book,
					read a name, and flip forward or backward depending on how close you
					are.
				</p>
				<hr />

				<h2>O(N) - Linear</h2>
				<p>
					N is the number of items in the list; if the list has 10 items, we
					have to print 10 times. If we have 1,000 items, we have to print 1,000
					times.
				</p>
				<hr />

				<h2>O(N log N) - Quasilinear</h2>
				<p>
					For each time N grows, the time required grows linearly and
					logarithmically.
				</p>
				<hr />

				<h2>O(N^2) - Quadratic</h2>
				<p>
					For each time N grows, the processing time doubles. If the list has 10
					items, we have to print 100 times.
				</p>
				<hr />

				<h2>O(2^N) - Power of 2</h2>
				<p>For each time N grows, the processing time required doubles.</p>
				<hr />

				<h2>O(N!) - Factorial Complexity</h2>
				<p>
					When every possible solution may have to be calculated for the correct
					output to be determined. 6! = 1*2*3*4*5*6 = 720.
				</p>
				<hr />
			</main>
		</>
	);
}

export default BigO;
