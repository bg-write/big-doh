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
						run time (how many steps do you take?) and space (how much memory do
						you need?). (<a href="https://www.youtube.com/watch?v=__vX2sjlpXU">
							YouTube
						</a>)
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
					The input size doesn't matter. Whether your input (N) is 1 or 1,000
					values long, the algorithm still just takes one "step." (
					<a href="https://youtu.be/__vX2sjlpXU?t=114">YouTube</a>)
				</p>
				<hr />

				<h2>O(log N) - Logarithmic</h2>
				<p>
					Cut the number of steps each time in half; if N is doubled, you only
					have to do 1 more operation. EX Binary Search: look up a name in the
					phone book, read a name, and flip forwards or backwards depending on
					how close you are. (
					<a href="https://www.youtube.com/watch?v=4mqtiLjtddY">YouTube</a>)
				</p>
				<hr />

				<h2>O(N) - Linear</h2>
				<p>
					N is the length of your input. If your list has 10 items, you print 10
					times. EX A basic "For Loop": for each item, do a specific thing. (
					<a href="https://youtu.be/__vX2sjlpXU?t=157">YouTube</a>)
				</p>
				<hr />

				<h2>O(N log N) - Quasilinear</h2>
				<p>
					For each time N grows, the time required grows linearly AND
					logarithmically. EX A basic "While For Loop": While something is true,
					for each item, do this specific thing. Also, Quick Sort and Merge
					Sort. (
					<a href="https://www.youtube.com/watch?v=K3NluEdHkao">YouTube</a>)
				</p>
				<hr />

				<h2>O(N^2) - Quadratic</h2>
				<p>
					For each time N grows, the processing time doubles. If your list has
					10 items, you have to print 100 times. EX Nesting two loops in the
					same function. (
					<a href="https://youtu.be/__vX2sjlpXU?t=203">YouTube</a>)
				</p>
				<hr />

				<h2>O(2^N) - Exponential</h2>
				<p>
					Doubles with every additional input. If N = 2, your algorithm runs 4
					times, and if N = 3, your algorithm runs 8 times. EX Recursion and
					Fibonacci. (
					<a href="https://www.youtube.com/watch?v=5AxcXHPB3GE">YouTube</a>)
				</p>
				<hr />

				<h2>O(N!) - Factorial</h2>
				<p>
					When you have to calculate every possible solution to determine the
					correct output. 6! = 6*5*4*3*2*1 = 720. EX Brute Force and the
					Traveling Salesman problem. (
					<a href="https://youtu.be/5AxcXHPB3GE?t=79">YouTube</a>)
				</p>
				<hr />
			</main>
		</>
	);
}

export default BigO;
