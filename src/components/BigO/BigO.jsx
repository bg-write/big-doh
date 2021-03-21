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
						<b>Big O Notation</b> - How efficient is your algorithm.
						Based on run time (how many steps do you have to take?) and space
						(how much memory do you need?).
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

				<h2>O(1)</h2>
				<h3>Constant</h3>
				<p>[Animation of a donut moving across a straight line.]</p>
				<p>
					When the input doesn't matter. If you add 1 or 1,000 values,the
					algorithm still just takes one "step."
				</p>
				<p>[code example]</p>
				<hr />

				<h2>O(log N)</h2>
				<h3>Logarithmic</h3>
				<p>[Animation of a line moving up left and right in halves]</p>
				<p>
					Cuts the problem in half each time. EX Looking up a phone book, read
					one random name, and flip forward or backward depending on how close
					that name is to what you’re looking for.
				</p>
				<p>[code example]</p>
				<hr />

				<h2>O(N)</h2>
				<h3>Linear</h3>
				<p>[Animation of a straight line moving up left to right.]</p>
				<p>
					N is the number of items in the list. If the list has 10 items, we
					have to print 10 times. If 1,000 items, we have to print 1,000 times.
				</p>
				<p>[code example]</p>
				<hr />

				<h2>O(N log N)</h2>
				<h3>Quasilinear</h3>
				<p>[Animation]</p>
				<p>
					For each time N grows, the time required grows linearly and
					logarithmically.
				</p>
				<p>[code example]</p>
				<hr />

				<h2>O(N^2)</h2>
				<h3>Quadratic</h3>
				<p>[Animation of a line moving almost straight up]</p>
				<p>
					For each time N grows, the processing time doubles. If the list has 10
					items, we have to print 100 times. If it has 1,000 items, we have to
					print 1M times.
				</p>
				<p>[code example]</p>
				<hr />

				<h2>O(2^N)</h2>
				<h3>Power of 2</h3>
				<p>[Animation of a line going nearly straight right away]</p>
				<p>For each time N grows, the processing time required doubles.</p>
				<p>[code example]</p>
				<hr />

				<h2>O(N!)</h2>
				<h3>Factorial Complexity</h3>
				<p>[Animation of a line going even more nearly straight right away]</p>
				<p>
					When every possible solution may have to be calculated for the correct
					output to be determined. 6! = 1*2*3*4*5*6 = 720 EX Brute force.
				</p>
				<p>[code example]</p>
				<hr />
			</main>
		</>
	);
}

export default BigO;
