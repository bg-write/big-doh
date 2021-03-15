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
				<p>
					A function that calls itself to break down a large problem into
					smaller bits. Achieve a small part of the larger task, then pass the
					partially completed problem to another call of itself.
				</p>
				<hr />

				<h2>Sorting</h2>
				Comparison Sorting // O(N^2) Stable: compare one value to another (group
				legos by size)
				<ul>
					<li>
						Selection Sort: Scan array, find the smallest element, move it down.
						BAD
					</li>
					<li>
						Bubble Sort: Compare and sort first 2 elements, go to the next pair,
						Items slowly “bubble” up. You move through the array in waves until
						it’s all sorted. Not good!
					</li>
					<li>
						Insertion Sort: Take each item and “insert” it into its right place.
					</li>
				</ul>
				<p>
					Divide-and-Conquer Comparison Sorting: Solve problems using recursion
					(keep splitting legos in half until you get to 1 lego, then put them
					all back together, now sorted)
				</p>
				<ul>
					<li>
						Merge Sort // Stable: Split array in half over and over until it’s
						small and sorted, then merge the small sorted pieces together on
						their way back up.
					</li>
					<li>
						Quick Sort // Unstable: Divide an array into 3 parts (the left
						partition, the pivot, the right partition), then do recursion on the
						partitions around the sorted pivot (single value). The pivot is
						usually the first or last array value, but it can be any random
						value.
					</li>
				</ul>
				<p>
					Distribution Sorting: group items by a characteristic; good to use for
					data sets that are dense, i.e. their values are close together (group
					legos by colors)
				</p>
				<ul>
					<li>
						Bucket Sort: Sort integers or strings into buckets based on values,
						then sort within
					</li>
					<li>
						{' '}
						Radix Sort: Same as Bucket, but only for integers; group by each
						digit
					</li>
				</ul>
				<hr />
				
				<h2>Searching</h2>
				<ul>
					<li>Brute Force Search: Try every possibility available</li>
					<li>
						{' '}
						Binary Search: When array is sorted, go to the middle (left of
						center), then search the left and go to the middle, and go on; it’s
						like searching a dictionary
					</li>
				</ul>
				<hr />
			</main>
		</>
	);
}

export default Algorithms;
