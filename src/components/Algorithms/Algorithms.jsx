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
				<h2>Recursion</h2>
				<p>[Animation]</p>
				<p>
					A function that calls itself to break down a large problem into
					smaller bits.
				</p>
				<p>[Code Example]</p>
				<hr />

				<h2>Sorting</h2>
				<h3>Comparison Sorting</h3>
				<p>Compare one value to another (group legos by size)</p>

				<h4>Selection Sort</h4>
				<p>[Animation]</p>
				<p>Scan array, find the smallest element, move it down.</p>
				<p>[Code Example]</p>

				<h4>Bubble Sort</h4>
				<p>[Animation]</p>
				<p>
					Compare and sort first 2 elements, go to the next pair, items slowly
					“bubble” up.
				</p>
				<p>[Code Example]</p>

				<h4>Insertion Sort</h4>
				<p>[Animation]</p>
				<p>Take each item and “insert” it into its right place.</p>
				<p>[Code Example]</p>
				<hr />

				<h3>Divide-and-Conquer Comparison Sorting</h3>
				<p>
					Solve problems using recursion (keep splitting legos in half until you
					get to 1 lego, then put them all back together, now sorted)
				</p>

				<h4>Insertion Sort</h4>
				<p>[Animation]</p>
				<p>Take each item and “insert” it into its right place.</p>
				<p>[Code Example]</p>

				<h4>Merge Sort</h4>
				<p>[Animation]</p>
				<p>
					Split array in half over and over until it’s small and sorted, then
					merge the small sorted pieces together on their way back up.
				</p>
				<p>[Code Example]</p>

				<h4>Quick Sort</h4>
				<p>[Animation]</p>
				<p>
					Divide an array into 3 parts (the left partition, the pivot, the right
					partition), then do recursion on the partitions around the sorted
					pivot (single value). The pivot is usually the first or last array
					value, but it can be any random value.
				</p>
				<p>[Code Example]</p>
				<hr />

				<h3>Distribution Sorting</h3>
				<p>
					Group items by a characteristic; good to use for data sets that are
					dense, i.e. their values are close together (group legos by colors)
				</p>

				<h4>Bucket Sort</h4>
				<p>[Animation]</p>
				<p>
					Sort integers or strings into buckets based on values, then sort
					within
				</p>
				<p>[Code Example]</p>

				<h4>Radix Sort</h4>
				<p>[Animation]</p>
				<p>Same as Bucket, but only for integers; group by each digit</p>
				<p>[Code Example]</p>
				<hr />

				<h2>Searching</h2>
				<h3>Brute Force Search</h3>
				<p>[Animation]</p>
				<p>Try every possibility available</p>
				<p>[Code Example]</p>
				<h3>Binary Search</h3>
				<p>[Animation]</p>
				<p>
					When array is sorted, go to the middle (left of center), then search
					the left and go to the middle, and go on; it’s like searching a
					dictionary
				</p>
				<p>[Code Example]</p>

				<hr />
			</main>
		</>
	);
}

export default Algorithms;
