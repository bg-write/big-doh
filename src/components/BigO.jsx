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
					<i>Measures an algorithm’s big-picture efficiency.</i>
				</p>
				<p>
					Big O Complexity: based on run time (how many steps does an algorithm
					have to take) and space complexity (an algorithm’s memory/RAM cost).
				</p>
				<p>
					There are many ways for Homer to find a donut - all with different
					advantages and disadvantages.
				</p>

				<p>Great</p>
				<p>
					O(1) - Constant (A straight line across) The input to the algorithm
					doesn’t matter. The algorithm will still take the same amount of time
					to run. The input list could be 1 or 1,000 items, yet the function
					would still just require one “step.”
				</p>

				<p>
					O(log(N)) - Logarithmic (A line moving up left to right in halves) -
					Cuts the problem in half each time. EX Looking up a phone book, read
					one random name, and flip forward or backward depending on how close
					that name is to what you’re looking for.
				</p>

				<p>Good</p>
				<p>
					O(N) - Linear (A straight line moving up left to right) - N is the
					number of items in the list. If the list has 10 items, we have to
					print 10 times. If 1,000 items, we have to print 1,000 times.
				</p>

				<p>Not Good</p>
				<p>
					O(N log(N)) - Quasilinear - For each time N grows, time required grows
					linearly and logarithmically.
				</p>

				<p>Bad</p>
				<p>
					O(N2) - Quadratic (A line moving almost straight up) - For each time N
					grows, the processing time doubles. If the list has 10 items, we have
					to print 100 times. If it has 1,000 items, we have to print 1M times.
				</p>

				<p>
					O(2N) - Power of 2 (A line going nearly straight right away) - For
					each time N grows, the processing time required doubles.
				</p>

				<p>
					O(N!) - Factorial Complexity (A line going even more nearly straight
					right away) - When every possible solution may have to be calculated
					for the correct output to be determined. 6! = 1*2*3*4*5*6 = 720 EX
					Brute force.
				</p>
				<hr />
			</main>
		</>
	);
}

export default BigO;
