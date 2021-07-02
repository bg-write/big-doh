import React from 'react';

function DataStructures() {
	return (
		<>
			<main id="data-structures-main">
				<div id="data-structures-title">
					<h1 id="data-structures-headline">DATA STRUCTURES</h1>
					<div id="data-structures-donut-container">
						<img
							id="data-structures-donut"
							className="loader"
							alt="donut"
							src="https://i.imgur.com/ske1xNn.png"
							loading="lazy"
						/>
					</div>
				</div>

				<div id="data-structures-blurb" className="center-text">
					<p>
						A container that stores data in a specific and organized layout.
						<br></br>(
						<i>
							<a
								href="https://www.youtube.com/watch?v=bum_19loj9A"
								target="_blank"
								rel="noopener noreferrer"
							>
								YouTube
							</a>
						</i>
						)
					</p>
				</div>

				<div id="data-structures-container">
					{/* ARRAYS & STRINGS */}
					<div className="item-container">
						<h2>Arrays & Strings</h2>
						<p>
							Linear data structures that are mostly concerned with the ordering
							and accessing of data.<br></br>
							<i>
								<small>
									(
									<a
										href="https://www.youtube.com/watch?v=0vzA1rm9CS8"
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

					<div className="card_grid">
						{/* ARRAYS */}
						<div className="card_grid_item">
							<div className="card">
								<h2 className="card_title">ARRAYS</h2>
								<a
									href="https://generalassemb.ly/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="card_image"
										alt="arrays"
										src="https://i.imgur.com/e4cqW9f.png"
										loading="lazy"
									/>
								</a>
								<p className="card_blurb">
									A collection of the items where items can be accessed by an
									index. Can be one or two dimensional.<br></br>
									<br></br>{' '}
									<i>
										<small>
											Ex: If you need to store an image (1000x1000px) as a
											bitmap, you can use a 2D array that's 1000x1000px. (
											<a
												href="https://www.youtube.com/watch?v=B2KusJcbVIg"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p>
								{/* <p className="card_example">
									<i>
										<small>
											Ex: If you need to store an image (1000x1000px) as a
											bitmap, you can use a 2D array that's 1000x1000px. (
											<a
												href="https://www.youtube.com/watch?v=B2KusJcbVIg"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p> */}
							</div>
						</div>
						{/* SETS */}
						<div className="card_grid_item">
							<div className="card">
								<h2 className="card_title">SETS</h2>
								<a
									href="https://generalassemb.ly/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="card_image"
										alt="sets"
										src="https://i.imgur.com/fV02AeY.png"
										loading="lazy"
									/>
								</a>
								<p className="card_blurb">
									Similar to arrays, but this collection of items can only
									contain unique values.<br></br>
									<br></br>{' '}
									<i>
										<small>
											Ex: Storing the names of everyone on a basketball team;
											you can only include team members, and you can't repeat
											any names. (
											<a
												href="https://www.youtube.com/watch?v=SvvvGT3qD1Y"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p>
								{/* <p className="card_example">
									<i>
										<small>
											Ex: Storing the names of everyone on a basketball team;
											you can only include team members, and you can't repeat
											any names. (
											<a
												href="https://www.youtube.com/watch?v=SvvvGT3qD1Y"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p> */}
							</div>
						</div>
						{/* LINKED LISTS */}
						<div className="card_grid_item">
							<div className="card">
								<h2 className="card_title">LINKED LISTS</h2>
								<a
									href="https://generalassemb.ly/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="card_image"
										alt="linked lists"
										src="https://i.imgur.com/cUSLM2p.png"
										loading="lazy"
									/>
								</a>
								<p className="card_blurb">
									Lists that store data inside of nodes (basic units for storing
									data) that point to each other, but the order is strict.
									<br></br>
									<br></br>{' '}
									<i>
										<small>
											Ex: A playlist of songs is a Doubly Linked List, since
											each song points to both the previous and next songs. (
											<a
												href="https://www.youtube.com/watch?v=njTh_OwMljA"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p>
								{/* <p className="card_example">
									<i>
										<small>
											Ex: A playlist of songs is a Doubly Linked List, since
											each song points to both the previous and next songs. (
											<a
												href="https://www.youtube.com/watch?v=njTh_OwMljA"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p> */}
							</div>
						</div>
						{/* HASH TABLES */}
						<div className="card_grid_item">
							<div className="card">
								<h2 className="card_title">HASH TABLES</h2>
								<a
									href="https://generalassemb.ly/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="card_image"
										alt="hash tables"
										src="https://i.imgur.com/IhZSTSQ.png"
										loading="lazy"
									/>
								</a>
								<p className="card_blurb">
									A list-like structure that uses a hash function to generate
									keys for each value. It's like scrambling a bunch of donuts to
									make new donuts, each one having a specific key. If you can
									use a Hash Table, use it!<br></br>
									<br></br>{' '}
									<i>
										<small>
											Ex: When you need to store and dynamically add social
											network feeds, and you don't know the size, you can use a
											Hash Table to uniquely identify each new feed. (
											<a
												href="https://www.youtube.com/watch?v=MfhjkfocRR0"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p>
								{/* <p className="card_example">
									<i>
										<small>
											Ex: When you need to store and dynamically add social
											network feeds, and you don't know the size, you can use a
											Hash Table to uniquely identify each new feed. (
											<a
												href="https://www.youtube.com/watch?v=MfhjkfocRR0"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p> */}
							</div>
						</div>
					</div>
					{/* STACKS & QUEUES */}
					<div className="item-container">
						<h2>Stacks & Queues</h2>
						<p>
							Linear data structures that are defined by how items are added and
							removed.<br></br>
							<i>
								<small>
									(
									<a
										href="https://www.youtube.com/watch?v=wjI1WNcIntg"
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

					<div className="card_grid">
						{/* STACKS */}
						<div className="card_grid_item">
							<div className="card">
								<h2 className="card_title">STACKS</h2>
								<a
									href="https://generalassemb.ly/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="card_image"
										alt="stacks"
										src="https://i.imgur.com/UQCW78i.png"
										loading="lazy"
									/>
								</a>
								<p className="card_blurb">
									Follows the ordering principle of “Last In First Out” (LIFO).
									It's like eating a stack of donuts; when you want a donut, you
									take the donut on top of the stack.<br></br><br></br>									<i>
										<small>
											Ex: A history of your recently visited websites is a
											Stack. (
											<a
												href="https://www.youtube.com/watch?v=wjI1WNcIntg"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p>
								{/* <p className="card_example">
									<i>
										<small>
											Ex: A history of your recently visited websites is a
											Stack. (
											<a
												href="https://www.youtube.com/watch?v=wjI1WNcIntg"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p> */}
							</div>
						</div>
						{/* QUEUES */}
						<div className="card_grid_item">
							<div className="card">
								<h2 className="card_title">QUEUES</h2>
								<a
									href="https://generalassemb.ly/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="card_image"
										alt="queues"
										src="https://i.imgur.com/qSqFRY4.png"
										loading="lazy"
									/>
								</a>
								<p className="card_blurb">
									Follows the ordering principle of “First In First Out” (FIFO).
									It's like waiting in line to buy donuts; if you're at the
									front of the line, you get to leave first.<br></br><br></br>									<i>
										<small>
											Ex: Programming a printer Queue can make sure that jobs
											are printed in the order of their arrival. (
											<a
												href="https://www.youtube.com/watch?v=wjI1WNcIntg"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p>
								{/* <p className="card_example">
									<i>
										<small>
											Ex: Programming a printer Queue can make sure that jobs
											are printed in the order of their arrival. (
											<a
												href="https://www.youtube.com/watch?v=wjI1WNcIntg"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p> */}
							</div>
						</div>
					</div>
					{/* TREES & GRAPHS */}
					<div className="item-container">
						<h2>Trees & Graphs</h2>
						<p>
							Non-linear data structures that have nodes (basic units for
							storing data) and edges (lines that connect nodes to each other).
							Tree edges are more rigid than graphs.<br></br>
							<i>
								<small>
									(
									<a
										href="https://www.youtube.com/watch?v=oSWTXtMglKE"
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
					<div className="card_grid">
						{/* TREES */}
						<div className="card_grid_item">
							<div className="card">
								<h2 className="card_title">TREES</h2>
								<a
									href="https://generalassemb.ly/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="card_image"
										alt="trees"
										src="https://i.imgur.com/WG26NDo.png"
										loading="lazy"
									/>
								</a>
								<p className="card_blurb">
									A tree-like structure in which nodes can store lists of child
									nodes.<br></br><br></br>									<i>
										<small>
											Ex: Navigating all your Mac files through Finder. Also, a
											(very) large tree can store all the possible moves in a
											chess game. (
											<a
												href="https://www.youtube.com/watch?v=oSWTXtMglKE"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p>
								{/* <p className="card_example">
									<i>
										<small>
											Ex: Navigating all your Mac files through Finder. Also, a
											(very) large tree can store all the possible moves in a
											chess game. (
											<a
												href="https://www.youtube.com/watch?v=oSWTXtMglKE"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p> */}
							</div>
						</div>
						{/* BINARY TREES */}
						<div className="card_grid_item">
							<div className="card">
								<h2 className="card_title">BINARY TREES</h2>
								<a
									href="https://generalassemb.ly/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="card_image"
										alt="binary trees"
										src="https://i.imgur.com/FAgEGr2.png"
										loading="lazy"
									/>
								</a>
								<p className="card_blurb">
									Trees that store values in left and right pointers. A Binary
									Search Tree is where every node fits a specific ordering.<br></br><br></br>									<i>
										<small>
											Ex: A family tree in which every member has two children.
											(
											<a
												href="https://www.youtube.com/watch?v=oSWTXtMglKE"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p>
								{/* <p className="card_example">
									<i>
										<small>
											Ex: A family tree in which every member has two children.
											(
											<a
												href="https://www.youtube.com/watch?v=oSWTXtMglKE"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p> */}
							</div>
						</div>
						{/* BREADTH FIRST SEARCH (BFS) */}
						<div className="card_grid_item">
							<div className="card">
								<h2 className="card_title">BREADTH FIRST SEARCH (BFS)</h2>
								<a
									href="https://pdfsharein.blogspot.com/2020/05/depth-first-search-vs-breadth-first.html"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="card_image"
										alt="BFS"
										src="https://i.imgur.com/7yerhuP.png"
										loading="lazy"
									/>
								</a>
								<p className="card_blurb">
									A queue-like search that traverses a tree from left to right,
									then top to bottom, like reading each level of all the nodes.<br></br><br></br>									<i>
										<small>
											Ex: Good for finding the shortest path between two nodes.
											(
											<a
												href="https://www.youtube.com/watch?v=QRq6p9s8NVg"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p>
								{/* <p className="card_example">
									<i>
										<small>
											Ex: Good for finding the shortest path between two nodes.
											(
											<a
												href="https://www.youtube.com/watch?v=QRq6p9s8NVg"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p> */}
							</div>
						</div>
						{/* DEPTH FIRST SEARCH (DFS) */}
						<div className="card_grid_item">
							<div className="card">
								<h2 className="card_title">DEPTH FIRST SEARCH (DFS)</h2>
								<a
									href="https://totheinnovation.com/depth-first-search-dfs/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="card_image"
										alt="DFS"
										src="https://i.imgur.com/mkx2xrk.jpg"
										loading="lazy"
									/>
								</a>
								<p className="card_blurb">
									A stack-like search that traverses a tree from top to bottom,
									visiting all a node's child nodes before moving from left to
									right to its siblings.<br></br><br></br>									<i>
										<small>
											Ex: Good for looking for paths and values far away from
											our source. (
											<a
												href="https://www.youtube.com/watch?v=iaBEKo5sM7w"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p>
								{/* <p className="card_example">
									<i>
										<small>
											Ex: Good for looking for paths and values far away from
											our source. (
											<a
												href="https://www.youtube.com/watch?v=iaBEKo5sM7w"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p> */}
							</div>
						</div>
						{/* TRIES */}
						<div className="card_grid_item">
							<div className="card">
								<h2 className="card_title">TRIES</h2>
								<a
									href="https://generalassemb.ly/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="card_image"
										alt="tries"
										src="https://i.imgur.com/NXCozkT.png"
										loading="lazy"
									/>
								</a>
								<p className="card_blurb">
									Trees that aren't limited to only left and right pointers, but
									they usually only store alphabetical data as collections of
									strings.<br></br><br></br>									<i>
										<small>
											Ex: Many search dictionaries are built upon Tries. (
											<a
												href="https://www.youtube.com/watch?v=zIjfhVPRZCg"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p>
								{/* <p className="card_example">
									<i>
										<small>
											Ex: Many search dictionaries are built upon Tries. (
											<a
												href="https://www.youtube.com/watch?v=zIjfhVPRZCg"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p> */}
							</div>
						</div>
						{/* GRAPHS */}
						<div className="card_grid_item">
							<div className="card">
								<h2 className="card_title">GRAPHS</h2>
								<a
									href="https://generalassemb.ly/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										className="card_image"
										alt="graphs"
										src="https://i.imgur.com/k9X8jh5.png"
										loading="lazy"
									/>
								</a>
								<p className="card_blurb">
									Any collection of nodes and edges, in which any node can have
									multiple edges to other nodes.<br></br><br></br>									<i>
										<small>
											Ex: A group of people on Facebook make up a Graph; some
											people follow each other while others only follow one-way.
											(
											<a
												href="https://www.youtube.com/watch?v=DBRW8nwZV-g"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p>
								{/* <p className="card_example">
									<i>
										<small>
											Ex: A group of people on Facebook make up a Graph; some
											people follow each other while others only follow one-way.
											(
											<a
												href="https://www.youtube.com/watch?v=DBRW8nwZV-g"
												target="_blank"
												rel="noopener noreferrer"
											>
												YouTube
											</a>
											)
										</small>
									</i>
								</p> */}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default DataStructures;
