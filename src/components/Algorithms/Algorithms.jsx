import React from 'react';

function Algorithms() {
	return (
		<>
			<main id="algorithms-main">
				<div id="algorithms-title">
					<h1 id="algorithms-headline">ALGORITHMS</h1>
					<img
						id="algorithms-donut"
						className="loader"
						alt="donut"
						src="https://i.imgur.com/ske1xNn.png"
					/>
				</div>

				<div id="algorithms-blurb" className="center-text">
					<p>
						A REPEATABLE SERIES OF STEPS TAKEN TO SOLVE A PROBLEM, PRODUCE SOME
						OUTPUT, OR ACHIEVE A GOAL.<br></br>(
						<i>
							<a
								href="https://www.youtube.com/watch?v=6hfOvs8pY1k"
								target="_blank"
								rel="noopener noreferrer"
							>
								YouTube
							</a>
						</i>
						)
					</p>
				</div>

				<div id="algorithms-container">
					<div className="item-container white-background">
						<h2>But First, Recursion</h2>
						<img
							id="recursion"
							alt="recursion"
							src="https://i.imgur.com/zD5qpAZ.gif"
							width="40%"
						/>
						<p>
							A function that calls itself to break down a larger problem into
							smaller bits.<br></br>
							<i>
								<small>
									Ex: The Fibonacci sequence. (
									<a
										href="https://www.youtube.com/watch?v=6oDQaB2one8"
										target="_blank"
										rel="noopener noreferrer"
									>
										YouTube
									</a>
									)
								</small>
							</i>
						</p>
					</div>

					<div className="item-container">
						<h2>Comparison Sort Algorithms</h2>
						<img
							id="comparison-sort"
							alt="comparison sort"
							src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-sorting/comparison.gif"
							width="40%"
						/>
						<p>
							Compare and order 2 items at a time.<br></br>
							<i>
								<small>
									Ex: Comparing a group of lego pieces based on their size. (
									<a
										href="https://www.youtube.com/watch?v=kPRA0W1kECg"
										target="_blank"
										rel="noopener noreferrer"
									>
										YouTube
									</a>
									)
								</small>
							</i>
						</p>
					</div>

					<div className="flex-container-algorithms">
						<div className="item-container-algorithms white-background">
							<h4>Bubble Sort</h4>
							<img
								id="bubble-sort"
								alt="bubble sort"
								src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/basic-sorts/bubble-sort.gif"
								width="60%"
							/>
							<p>
								Compare and sort 2 items and then move to the next pair. All the
								necessary elements will eventually “bubble” up.<br></br>
								<i>
									<small>
										Ex: It's usually used to introduce the idea of an algorithm,
										or it's used within more efficient sorting algorithms. (
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
											It's not great.
										</a>
										)
									</small>
								</i>
							</p>
						</div>
						<div className="item-container-algorithms white-background">
							<h4>Insertion Sort</h4>
							<img
								id="insertion-sort"
								alt="insertion sort"
								src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/basic-sorts/insertion-sort.gif"
								width="60%"
							/>
							<p>
								Go down the line, select each item, and “insert” it into its
								proper place if needed.<br></br>
								<i>
									<small>
										Ex: When you're playing cards and you manually sort your
										cards in order. (
										<a
											href="https://www.youtube.com/watch?v=ROalU379l3U"
											target="_blank"
											rel="noopener noreferrer"
										>
											YouTube
										</a>
										)
									</small>
								</i>
							</p>
						</div>
					</div>
					<div className="item-container">
						<h2>Divide-and-Conquer Sort Algorithms</h2>
						<img
							id="divide-and-conquer"
							alt="divide-and-conquer sort"
							src="https://i.imgur.com/24jRkiE.gif"
							width="40%"
						/>
						<p>
							Solve problems using comparison sort and recursion.<br></br>
							<i>
								<small>
									Ex: Keep splitting a group of legos in half until you get to 1
									lego, and then you put them all back together, now all sorted.
									(
									<a
										href="https://www.youtube.com/watch?v=es2T6KY45cA"
										target="_blank"
										rel="noopener noreferrer"
									>
										YouTube
									</a>
									)
								</small>
							</i>
						</p>
					</div>

					<div className="flex-container-algorithms">
						<div className="item-container-algorithms white-background">
							<h4>Merge Sort</h4>
							<img
								id="merge-sort"
								alt="merge sort"
								src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/divide-conquer-sorts/merge-sort.gif"
								width="40%"
							/>
							<p>
								Split the items in half over and over until they're all sorted
								(divide, via the Merge Sort algorithm), and then merge the
								sorted pieces back together on their way back up (conquer, via
								the Merge algorithm).<br></br>
								<i>
									<small>
										Ex: Sorting a Linked List. (
										<a
											href="https://www.youtube.com/watch?v=XaqR3G_NVoo"
											target="_blank"
											rel="noopener noreferrer"
										>
											YouTube
										</a>
										)
									</small>
								</i>
							</p>
						</div>
						<div className="item-container-algorithms white-background">
							<h4>Quick Sort</h4>
							<img
								id="quick-sort"
								alt="quick sort"
								src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/divide-conquer-sorts/quick-sort.gif"
								width="40%"
							/>
							<p>
								Divide all your items into 3 parts (the left partition, the
								pivot, and the right partition), then do recursion on the
								partitions around the sorted pivot (single value). The pivot is
								usually the first or last value, but it can be any random value.
								<br></br>
								<i>
									<small>
										Ex: Unlike Merge Sort, the hard work is done during the
										dividing, not the merging. (
										<a
											href="https://www.youtube.com/watch?v=ywWBy6J5gz8"
											target="_blank"
											rel="noopener noreferrer"
										>
											YouTube
										</a>
										)
									</small>
								</i>
							</p>
						</div>
					</div>

					<div className="item-container">
						<h2>Distribution Sort Algorithms</h2>
						<img
							id="distribution-sort"
							alt="distribution sort"
							src="https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-sorting/distribution.gif"
							width="40%"
						/>
						<p>
							Instead of comparing 2 items, you compare and group all your items
							by properties.<br></br>
							<i>
								<small>
									Ex: Group all your lego pieces by color. (
									<a
										href="https://www.youtube.com/watch?v=VuXbEb5ywrU"
										target="_blank"
										rel="noopener noreferrer"
									>
										YouTube
									</a>
									)
								</small>
							</i>
						</p>
					</div>
					<div className="flex-container-algorithms">
						<div className="item-container-algorithms white-background">
							<h4>Bucket Sort</h4>
							<img
								id="bucket-sort"
								alt="bucket sort"
								src="https://i.imgur.com/iJQQN5o.gif"
								width="40%"
							/>
							<p>
								Sort items into buckets based on certain properties, and then
								sort within those buckets.<br></br>
								<i>
									<small>
										Ex: When sorting a large set of floating point numbers
										(between 0.0 and 1.0), you can create sorting "buckets" 0
										through 9 and sort from there. (
										<a
											href="https://www.youtube.com/watch?v=ovAfqUafjAA"
											target="_blank"
											rel="noopener noreferrer"
										>
											YouTube
										</a>
										)
									</small>
								</i>
							</p>
						</div>
						<div className="item-container-algorithms white-background">
							<h4>Radix Sort</h4>
							<a
								href="https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/radix-sort"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									id="radix-sort"
									alt="radix sort"
									src="https://i.imgur.com/EyV7QoH.gif"
									width="40%"
								/>
							</a>
							<p>
								Same as Bucket Sort, but only for integers; you group each
								integer by certain digits.<br></br>
								<i>
									<small>
										Ex: Given a range of large numbers, sort all the numbers
										first by the first digit (1-9), then the next digit range
										(10-90) and so on. (
										<a
											href="https://www.youtube.com/watch?v=XiuSW_mEn7g"
											target="_blank"
											rel="noopener noreferrer"
										>
											YouTube
										</a>
										)
									</small>
								</i>
							</p>
						</div>
					</div>
					<div className="item-container">
						<h2>Search Algorithms</h2>
						<a
							href="https://www.tvweek.com/tvbizwire/2015/05/merriam-webster-declares-the-word-of-the-year-for-2014-and-adds-a-bunch-of-new-words-to-the-dictionary/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								id="search-algorithms"
								alt="search algorithms"
								src="https://i.imgur.com/C8PIAyr.gif"
								width="40%"
							/>
						</a>
						<p>
							Find, and sometimes retrieve, an item with a specific value in a
							sorted sequence.<br></br>
							<i>
								<small>
									Ex: Searching a dictionary. (
									<a
										href="https://www.youtube.com/watch?v=-PuqKbu9K3U"
										target="_blank"
										rel="noopener noreferrer"
									>
										YouTube
									</a>
									)
								</small>
							</i>
						</p>
					</div>

					<div className="flex-container-algorithms">
						<div className="item-container-algorithms white-background">
							<h4>Brute Force Search</h4>
							<a
								href="https://www.quantamagazine.org/one-way-salesman-finds-fast-path-home-20171005/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									id="brute-force"
									alt="brute-force"
									src="https://i.imgur.com/9dOqrHb.gif"
									width="40%"
								/>
							</a>
							<p>
								Try every possibility available.<br></br>
								<i>
									<small>
										Ex: The Traveling Salesman Problem. If a salesman needs to
										visit 10 cities, calculate the total distance for each
										possible route and then select the shortest one. (
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
											But avoid it when you can.
										</a>
										)
									</small>
								</i>
							</p>
						</div>
						<div className="item-container-algorithms white-background">
							<h4>Binary Search</h4>
							<a
								href="https://medium.com/techie-delight/binary-search-practice-problems-4c856cd9f26c"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									id="binary-search"
									alt="binary search"
									src="https://i.imgur.com/CiLvLbT.gif"
									width="40%"
								/>
							</a>
							<p>
								Find an item by repeatedly halving your search. When an array is
								sorted, go to the middle (left of center) and then search its
								left or right and go to its new middle, and so on.<br></br>
								<i>
									<small>
										Ex: Literally searching a dictionary. (
										<a
											href="https://www.youtube.com/watch?v=iP897Z5Nerk"
											target="_blank"
											rel="noopener noreferrer"
										>
											YouTube
										</a>
										)
									</small>
								</i>
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Algorithms;
