import React from 'react';
import { Link } from 'react-router-dom';

function Algorithms() {
	return (
		<>
			<main>
				<h1>ALGORITHMS</h1>
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
					<i>A series of steps taken to solve a problem or achieve a goal.</i>
				</p>
				<h2>But First, Recursion</h2>
				<p>[IMAGE]</p>
				<p>
					A function that calls itself to break down a larger problem into
					smaller bits. EX Fibonacci.
				</p>
				<hr />

				<h2>Comparison Sort Algorithms</h2>
				<p>
					Compare two items and decide which one to put first. EX comparing a
					group of lego pieces by their size.
				</p>

				<h4>Bubble Sort</h4>
				<img
					id="bubble-sort"
					alt="bubble sort"
					src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/basic-sorts/bubble-sort.gif"
					width="150px"
				/>
				<p>
					Compare and sort 2 items and then move to the next pair; all the
					necessary elements will eventually “bubble” up.
				</p>

				<h4>Insertion Sort</h4>
				<img
					id="insertion-sort"
					alt="insertion sort"
					src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/basic-sorts/insertion-sort.gif"
					width="150px"
				/>
				<p>Take each item and “insert” it into its proper place.</p>
				<hr />

				<h2>Divide-and-Conquer Sort Algorithms</h2>
				<p>
					Solve problems using comparison sort and recursion. EX keep splitting
					a group of legos in half until you get to 1 lego, then you put them
					all back together, now sorted.
				</p>

				<h4>Merge Sort</h4>
				<img
					id="merge-sort"
					alt="merge sort"
					src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/divide-conquer-sorts/merge-sort.gif"
					width="150px"
				/>
				<p>
					Split the items in half over and over until they're all small and
					sorted (divide a la the merge sort algorithm), then merge the small
					sorted pieces together on their way back up (conquer a la the merge
					algorithm).
				</p>

				<h4>Quick Sort</h4>
				<img
					id="quick-sort"
					alt="quick sort"
					src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/divide-conquer-sorts/quick-sort.gif"
					width="150px"
				/>
				<p>
					Divide all your items into 3 parts (the left partition, the pivot, and
					the right partition), then do recursion on the partitions around the
					sorted pivot (single value). The pivot is usually the first or last
					value, but it can be any random value.
				</p>
				<hr />

				<h2>Distribution Sort Algorithms</h2>
				<p>
					Instead of comparing 2 items, you group all your items by properties.
					EX group all your lego pieces by color.
				</p>

				<h4>Bucket Sort</h4>
				<p>[IMAGE]</p>
				<p>
					Sort items into buckets based on certain properties, and then sort
					within those buckets.
				</p>

				<h4>Radix Sort</h4>
				<p>[IMAGE]</p>
				<p>
					Same as Bucket Sort, but only used for integers; you group each
					integer by certain digits
				</p>
				<hr />

				<h2>Search Algorithms</h2>
				<h3>Brute Force Search</h3>
				<p>[IMAGE]</p>
				<p>Try every possibility available</p>

				<h3>Binary Search</h3>
				<p>[IMAGE]</p>
				<p>
					When array is sorted, go to the middle (left of center), then search
					the left and go to the middle, and go on; it’s like searching a
					dictionary.
				</p>

				<hr />
			</main>
		</>
	);
}

export default Algorithms;
