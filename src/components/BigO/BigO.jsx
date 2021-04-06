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
					When the input size doesn't matter; Whether your input (N) is 1 or
					1,000 values long, the algorithm still just takes one "step."
				</p>
				<hr />

				<h2>O(log N) - Logarithmic</h2>
				<p>
					Cut the number of steps each time in half. EX Binary Search; look up a
					name in the phone book, read a name, and flip forwards or backwards
					depending on how close you are.
				</p>
				<hr />

				<h2>O(N) - Linear</h2>
				<p>
					When N is the length of your input; if your list has 10 items, you
					print 10 times. If you have 1,000 items, you print 1,000 times. EX the
					basic "For Loop" (for each item, do this specific thing).
				</p>
				<hr />

				<h2>O(N log N) - Quasilinear</h2>
				<p>
					For each time N grows, the time required grows linearly AND
					logarithmically. EX Quick Sort and Merge Sort.
				</p>
				<hr />

				<h2>O(N^2) - Quadratic</h2>
				<p>
					For each time N grows, the processing time doubles; if your list has
					10 items, you have to print 100 times. EX nesting two loops in the
					same function.
				</p>
				<hr />

				<h2>O(2^N) - Exponential</h2>
				<p>
					Doubles with every additional input; if N = 2, your algorithm runs 4
					times, and if N = 3, your algorithm runs 8 times. EX Fibonacci.
				</p>
				<hr />

				<h2>O(N!) - Factorial</h2>
				<p>
					When every possible solution may have to be calculated in order to
					determine the correct output. 6! = 6*5*4*3*2*1 = 720. EX Brute Force,
					the Traveling Salesman problem.
				</p>
				<hr />
			</main>
		</>
	);
}

export default BigO;
