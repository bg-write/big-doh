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
					<i>
						<b>Algorithms</b> - A series of steps taken to solve a problem or
						achieve a goal. (
						<a
							href="https://www.youtube.com/watch?v=6hfOvs8pY1k"
							target="_blank"
							rel="noopener noreferrer"
						>
							YouTube
						</a>
						)
					</i>
				</p>
				<h2>But First, Recursion</h2>
				<img
					id="recursion"
					alt="recursion"
					src="https://i.imgur.com/Fc8cmwS.jpg"
					width="60%"
				/>
				<p>
					A function that calls itself to break down a larger problem into
					smaller bits. EX Fibonacci. (
					<a
						href="https://www.youtube.com/watch?v=6oDQaB2one8"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>
				<hr />

				<h2>Comparison Sort Algorithms</h2>
				<img
					id="comparison-sort"
					alt="comparison sort"
					src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-sorting/comparison.gif"
					width="60%"
				/>
				<p>
					Compare and order 2 items at a time. EX Comparing a group of lego
					pieces by their size.
				</p>

				<h4>Bubble Sort</h4>
				<img
					id="bubble-sort"
					alt="bubble sort"
					src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/basic-sorts/bubble-sort.gif"
					width="60%"
				/>
				<p>
					Compare and sort 2 items and then move to the next pair. All the
					necessary elements will eventually “bubble” up. (
					<a
						href="https://www.youtube.com/watch?v=lyZQPjUT5B4"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					) (
					<a
						href="https://www.youtube.com/watch?v=k4RRi_ntQc8"
						target="_blank"
						rel="noopener noreferrer"
					>
						But it's not great.
					</a>
					)
				</p>

				<h4>Insertion Sort</h4>
				<img
					id="insertion-sort"
					alt="insertion sort"
					src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/basic-sorts/insertion-sort.gif"
					width="60%"
				/>
				<p>
					Go down the line, select each item, and “insert” it into its proper
					place if needed. (
					<a
						href="https://www.youtube.com/watch?v=ROalU379l3U"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>
				<hr />

				<h2>Divide-and-Conquer Sort Algorithms</h2>
				<p>
					Solve problems using comparison sort and recursion. EX Keep splitting
					a group of legos in half until you get to 1 lego, and then you put
					them all back together, now all sorted.
				</p>

				<h4>Merge Sort</h4>
				<img
					id="merge-sort"
					alt="merge sort"
					src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/divide-conquer-sorts/merge-sort.gif"
					width="60%"
				/>
				<p>
					Split the items in half over and over until they're all sorted
					(divide, via the merge sort algorithm), and then merge the sorted
					pieces together on their way back up (conquer, via the merge
					algorithm). (
					<a
						href="https://www.youtube.com/watch?v=XaqR3G_NVoo"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>

				<h4>Quick Sort</h4>
				<img
					id="quick-sort"
					alt="quick sort"
					src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/divide-conquer-sorts/quick-sort.gif"
					width="60%"
				/>
				<p>
					Divide all your items into 3 parts (the left partition, the pivot, and
					the right partition), then do recursion on the partitions around the
					sorted pivot (single value). The pivot is usually the first or last
					value, but it can be any random value. (
					<a
						href="https://www.youtube.com/watch?v=ywWBy6J5gz8"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>
				<hr />

				<h2>Distribution Sort Algorithms</h2>
				<img
					id="distribution-sort"
					alt="distribution sort"
					src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-sorting/distribution.gif"
					width="60%"
				/>
				<p>
					Instead of comparing 2 items, you compare and group all your items by
					properties. EX Group all your lego pieces by color.
				</p>

				<h4>Bucket Sort</h4>
				<img
					id="bucket-sort"
					alt="bucket sort"
					src="https://i.imgur.com/n6k4pxm.png"
					width="60%"
				/>
				<p>
					Sort items into buckets based on certain properties, and then sort
					within those buckets. (
					<a
						href="https://www.youtube.com/watch?v=ovAfqUafjAA"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>

				<h4>Radix Sort</h4>
				<a
					href="https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/radix-sort"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						id="radix-sort"
						alt="radix sort"
						src="https://i.imgur.com/DdlVIuI.png"
						width="60%"
					/>
				</a>
				<p>
					Same as Bucket Sort, but only for integers; you group each integer by
					certain digits. (
					<a
						href="https://www.youtube.com/watch?v=XiuSW_mEn7g"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>
				<hr />

				<h2>Search Algorithms</h2>
				<a
					href="https://www.tvweek.com/tvbizwire/2015/05/merriam-webster-declares-the-word-of-the-year-for-2014-and-adds-a-bunch-of-new-words-to-the-dictionary/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						id="search-algorithms"
						alt="search algorithms"
						src="https://i.imgur.com/J8bEqnB.png"
						width="60%"
					/>
				</a>
				<p>
					Check for, and sometimes retrieve, one or more items from a dataset.
				</p>
				<h3>Brute Force Search</h3>
				<a
					href="https://www.quantamagazine.org/one-way-salesman-finds-fast-path-home-20171005/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						id="brute-force"
						alt="brute-force"
						src="https://i.imgur.com/kdS3z6H.jpg"
						width="60%"
					/>
				</a>
				<p>
					Try every possibility available. EX The Traveling Salesman Problem: If
					a salesman needs to visit 10 cities, calculate the total distance for
					each possible route and then select the shortest one. (
					<a
						href="https://www.youtube.com/watch?v=wDXQ6tWsJxw"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					) (
					<a
						href="https://www.youtube.com/watch?v=9FzT2I21F3k"
						target="_blank"
						rel="noopener noreferrer"
					>
						But like, avoid it when you can.
					</a>
					)
				</p>

				<h3>Binary Search</h3>
				<a
					href="https://medium.com/techie-delight/binary-search-practice-problems-4c856cd9f26c"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						id="binary-search"
						alt="binary search"
						src="https://i.imgur.com/NYUb3J3.png"
						width="60%"
					/>
				</a>
				<p>
					When an array is sorted, go to the middle (left of center) and then
					search its left or right and go to its new middle, and so on. EX
					Searching a dictionary. (
					<a
						href="https://www.youtube.com/watch?v=iP897Z5Nerk"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>

				<hr />
			</main>
		</>
	);
}

export default Algorithms;
