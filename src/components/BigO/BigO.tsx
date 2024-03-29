function BigO() {
	return (
		<>
			<main id="bigO-main">
				<div id="bigO-title">
					<h1 id="bigO-headline">BIG O NOTATION</h1>
					<div id="bigO-donut-container">
						<img
							id="bigO-donut"
							className="loader"
							alt="donut"
							src="https://i.imgur.com/ske1xNn.png"
						/>
					</div>
				</div>

				<div id="bigO-blurb" className="center-text">
					<p>
						How efficient is your algorithm. Based on run time (how many steps do you
						have to take) and space complexity (how much memory do you need).<br></br>
						(
						<i>
							<a
								href="https://www.youtube.com/watch?v=__vX2sjlpXU"
								target="_blank"
								rel="noopener noreferrer">
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
						rel="noopener noreferrer">
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
						<h2>O(1) - CONSTANT</h2>
						<a
							href="https://www.freecodecamp.org/news/big-o-notation/"
							target="_blank"
							rel="noopener noreferrer">
							<img
								id="CONSTANT"
								alt="CONSTANT"
								src="https://i.imgur.com/SRJqkiF.png"
								width="95%"
							/>
						</a>
						<p>
							The input size doesn't matter. Whether your input (N) is 1 or 1,000
							values long, the algorithm still just takes one "step." When you're
							planning a birthday party, you bake one cake, no matter how many people
							show up. O(1) has the least complexity, which is great.
						</p>
						<p>
							<i>
								<small>
									Ex: Looking up an array when you already know the key or index; it
									doesn't matter how long the array is. (
									<a
										href="https://youtu.be/__vX2sjlpXU?t=114"
										target="_blank"
										rel="noopener noreferrer">
										YouTube
									</a>
									)
								</small>
							</i>
						</p>
					</div>

					<div className="item-container">
						<h2>O(log N) - LOGARITHMIC</h2>
						<a
							href="https://www.freecodecamp.org/news/big-o-notation/"
							target="_blank"
							rel="noopener noreferrer">
							<img
								id="LOGARITHMIC"
								alt="LOGARITHMIC"
								src="https://i.imgur.com/rMNtk3F.png"
								width="95%"
							/>
						</a>
						<p>
							Cut the number of steps each time in half. If N is doubled, you only have
							to do 1 more operation. If 1 person is coming to your birthday party, you
							only need to bake 1 cake; 2-3 people require baking 2 cakes; 4-7 people
							require 3 cakes; and so on.
						</p>
						<p>
							<i>
								<small>
									Ex: "Binary Search" in an ordered array - look at the middle of the
									array, see if the value is higher or lower than what you need, then
									repeat the process now only focusing on the half you need. (
									<a
										href="https://www.youtube.com/watch?v=4mqtiLjtddY"
										target="_blank"
										rel="noopener noreferrer">
										YouTube
									</a>
									)
								</small>
							</i>
						</p>
					</div>

					<div className="item-container">
						<h2>O(N) - LINEAR</h2>
						<a
							href="https://www.freecodecamp.org/news/big-o-notation/"
							target="_blank"
							rel="noopener noreferrer">
							<img
								id="LINEAR"
								alt="LINEAR"
								src="https://i.imgur.com/cpOZS0H.png"
								width="95%"
							/>
						</a>
						<p>
							N is the length of your input. If your list has 10 items, you print 10
							times. Each birthday party guest gets a cake.
						</p>
						<p>
							<i>
								<small>
									Ex: A basic "For Loop": for each item, do a specific thing. (
									<a
										href="https://youtu.be/__vX2sjlpXU?t=157"
										target="_blank"
										rel="noopener noreferrer">
										YouTube
									</a>
									)
								</small>
							</i>
						</p>
					</div>

					<div className="item-container">
						<h2>O(N log N) - QUASILINEAR</h2>
						<a
							href="https://www.happycoders.eu/algorithms/big-o-notation-time-complexity/"
							target="_blank"
							rel="noopener noreferrer">
							<img
								id="QUASILINEAR"
								alt="QUASILINEAR"
								src="https://i.imgur.com/esfgCCw.png"
								width="95%"
							/>
						</a>
						<p>
							For each time N grows, the time required grows linearly and
							logarithmically.
						</p>
						<p>
							<i>
								<small>
									Ex: A basic "While For Loop": While something is true, for each item,
									do this specific thing. Also, Quick Sort and Merge Sort. (
									<a
										href="https://www.youtube.com/watch?v=K3NluEdHkao"
										target="_blank"
										rel="noopener noreferrer">
										YouTube
									</a>
									)
								</small>
							</i>
						</p>
					</div>

					<div className="item-container">
						<h2>O(N^2) - QUADRATIC</h2>
						<a
							href="https://www.freecodecamp.org/news/big-o-notation/"
							target="_blank"
							rel="noopener noreferrer">
							<img
								id="QUADRATIC"
								alt="QUADRATIC"
								src="https://i.imgur.com/dMDKMwY.png"
								width="95%"
							/>
						</a>
						<p>
							For each time N grows, the processing time doubles. If your list has 10
							items, you have to print 100 times, or 10^2 times. If you bake a cake for
							each guest and you also write their names on each cake, 1 cake requires 2
							steps (baking it and then writing a guest's name). 2 cakes require 4
							steps, and so on.
						</p>
						<p>
							<small>
								<i>
									Ex: Nesting two loops in the same function. Also "Selection Sort" and
									"Bubble Sort,"" when we have to iterate over each item and then compare
									to its unsorted items. (
									<a
										href="https://youtu.be/__vX2sjlpXU?t=203"
										target="_blank"
										rel="noopener noreferrer">
										YouTube
									</a>
									)
								</i>
							</small>
						</p>
					</div>

					<div className="item-container">
						<h2>O(2^N) - EXPONENTIAL</h2>
						<a
							href="https://www.101computing.net/big-o-notation-exponential-algorithm/"
							target="_blank"
							rel="noopener noreferrer">
							<img
								id="EXPONENTIAL"
								alt="EXPONENTIAL"
								src="https://i.imgur.com/BGdXHS2.png"
								width="95%"
							/>
						</a>
						<p>
							Doubles with every additional input. If N = 2, your algorithm runs 4
							times, or 2^2. If N = 3, your algorithm runs 8 times, or 2^3.
						</p>
						<p>
							<small>
								<i>
									Ex: "Recursion" and "Fibonacci." (
									<a
										href="https://www.youtube.com/watch?v=5AxcXHPB3GE"
										target="_blank"
										rel="noopener noreferrer">
										YouTube
									</a>
									)
								</i>
							</small>
						</p>
					</div>

					<div className="item-container">
						<h2>O(N!) - FACTORIAL</h2>
						<a
							href="https://www.freecodecamp.org/news/big-o-notation/"
							target="_blank"
							rel="noopener noreferrer">
							<img
								id="FACTORIAL"
								alt="FACTORIAL"
								src="https://i.imgur.com/BN2JUQ2.png"
								width="95%"
							/>
						</a>
						<p>
							When you have to calculate every possible solution to determine the
							correct output. 6! = 6*5*4*3*2*1 = 720.
						</p>
						<p>
							<small>
								<i>
									Ex: Brute Force and the Traveling Salesman problem. (
									<a
										href="https://youtu.be/5AxcXHPB3GE?t=79"
										target="_blank"
										rel="noopener noreferrer">
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
