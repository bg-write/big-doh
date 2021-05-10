import React from 'react';

function BigO() {
	return (
		<>
			<main id="bigO-main">
				<div id="bigO-title">
					<h1>BIG O NOTATION</h1>
					<img
						id="donut"
						class="loader"
						alt="donut"
						src="https://i.imgur.com/ske1xNn.png"
						width="50%"
					/>
				</div>

				<div id="bigO-blurb" className="center-text">
					<p>
						HOW EFFICIENT IS YOUR ALGORITHM. BASED ON RUN TIME (HOW MANY STEPS
						DO YOU TAKE) AND SPACE (HOW MUCH MEMORY DO YOU NEED).<br></br>(
						<i>
							<a
								href="https://www.youtube.com/watch?v=__vX2sjlpXU"
								target="_blank"
								rel="noopener noreferrer"
							>
								YouTube
							</a>
						</i>
						)
					</p>
				</div>

				<div id="bigO-image" className="center-text">
					<a
						href="https://www.bigocheatsheet.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							id="bigO"
							alt="Big O"
							src="https://i.imgur.com/q2GTKn3.png"
							width="95%"
						/>
					</a>
				</div>

				<div id="bigO-container">
					<div className="item-container">
						<h2>O(1) - Constant</h2>
						<p>
							The input size doesn't matter. Whether your input (N) is 1 or
							1,000 values long, the algorithm still just takes one "step."
							<br></br>
							<i>
								<small>
									Ex: XXX. (
									<a
										href="https://youtu.be/__vX2sjlpXU?t=114"
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
						<h2>O(log N) - Logarithmic</h2>
						<p>
							Cut the number of steps each time in half. If N is doubled, you
							only have to do 1 more operation.<br></br>
							<i>
								<small>
									Ex: Binary Search - look up a name in the phone book, read a
									name, and flip forwards or backwards depending on how close
									you are. (
									<a
										href="https://www.youtube.com/watch?v=4mqtiLjtddY"
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
						<h2>O(N) - Linear</h2>
						<p>
							N is the length of your input. If your list has 10 items, you
							print 10 times.<br></br>
							<i>
								<small>
									Ex: A basic For Loop: for each item, do a specific thing. (
									<a
										href="https://youtu.be/__vX2sjlpXU?t=157"
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
						<h2>O(N log N) - Quasilinear</h2>
						<p>
							For each time N grows, the time required grows linearly and
							logarithmically.<br></br>
							<i>
								<small>
									Ex: A basic While For Loop: While something is true, for each
									item, do this specific thing. Also, Quick Sort and Merge Sort.
									(
									<a
										href="https://www.youtube.com/watch?v=K3NluEdHkao"
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
						<h2>O(N^2) - Quadratic</h2>
						<p>
							For each time N grows, the processing time doubles. If your list
							has 10 items, you have to print 100 times.<br></br>
							<small>
								<i>
									Ex: Nesting two loops in the same function. (
									<a
										href="https://youtu.be/__vX2sjlpXU?t=203"
										target="_blank"
										rel="noopener noreferrer"
									>
										YouTube
									</a>
									)
								</i>
							</small>
						</p>
					</div>

					<div className="item-container">
						<h2>O(2^N) - Exponential</h2>
						<p>
							Doubles with every additional input. If N = 2, your algorithm runs
							4 times, and if N = 3, your algorithm runs 8 times.<br></br>
							<small>
								<i>
									Ex: Recursion and Fibonacci. (
									<a
										href="https://www.youtube.com/watch?v=5AxcXHPB3GE"
										target="_blank"
										rel="noopener noreferrer"
									>
										YouTube
									</a>
									)
								</i>
							</small>
						</p>
					</div>

					<div className="item-container">
						<h2>O(N!) - Factorial</h2>
						<p>
							When you have to calculate every possible solution to determine
							the correct output. 6! = 6*5*4*3*2*1 = 720.<br></br>
							<small>
								<i>
									Ex: Brute Force and the Traveling Salesman problem. (
									<a
										href="https://youtu.be/5AxcXHPB3GE?t=79"
										target="_blank"
										rel="noopener noreferrer"
									>
										YouTube
									</a>
									)
								</i>
							</small>
						</p>
					</div>
				</div>
			</main>
		</>
	);
}

export default BigO;
