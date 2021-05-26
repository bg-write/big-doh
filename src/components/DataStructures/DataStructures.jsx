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
						A CONTAINER THAT STORES DATA IN A SPECIFIC AND ORGANIZED LAYOUT.
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

					<div className="flex-container-data-structures">
						<div className="item-container-data-structures white-background">
							<h4>Arrays</h4>
							<img
								id="array"
								alt="array"
								src="https://i.imgur.com/e4cqW9f.png"
								width="60%"
								loading="lazy"
							/>
							<p>
								A collection of the items where items can be accessed by an
								index. Can be one or two dimensional.<hr></hr>
								<i>
									<small>
										Ex: If you need to store an image (1000x1000px) as a bitmap,
										you can use a 2D array that's 1000x1000px. (
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
						</div>
						<div className="item-container-data-structures white-background">
							<h4>Sets</h4>
							<img
								id="sets"
								alt="sets"
								src="https://i.imgur.com/fV02AeY.png"
								width="60%"
								loading="lazy"
							/>
							<p>
								Similar to arrays, but this collection of items can only contain
								unique values.<hr></hr>
								<i>
									<small>
										Ex: Storing the names of everyone on a basketball team; you
										can only include team members, and you can't repeat any
										names. (
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
						</div>
					</div>
					<div className="flex-container-data-structures">
						<div className="item-container-data-structures white-background">
							<h4>Linked Lists</h4>
							<img
								id="linked-lists"
								alt="linked lists"
								src="https://i.imgur.com/cUSLM2p.png"
								width="60%"
								loading="lazy"
							/>
							<p>
								Lists that store data inside of nodes (basic units for storing
								data) that point to each other, but the order is strict.
								<hr></hr>
								<i>
									<small>
										Ex: A playlist of songs is a Doubly Linked List, since each
										song points to both the previous and next songs. (
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
						</div>
						<div className="item-container-data-structures white-background">
							<h4>Hash Tables</h4>
							<img
								id="hash-tables"
								alt="hash tables"
								src="https://i.imgur.com/IhZSTSQ.png"
								width="60%"
								loading="lazy"
							/>
							<p>
								A list-like structure that uses a hash function to generate keys
								for each value. It's like scrambling a bunch of donuts to make
								new donuts, each one having a specific key. If you can use a
								Hash Table, use it!<hr></hr>
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
						</div>
					</div>

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
					<div className="flex-container-data-structures">
						<div className="item-container-data-structures white-background">
							<h4>Stacks</h4>
							<img
								id="stacks"
								alt="stacks"
								src="https://i.imgur.com/UQCW78i.png"
								width="60%"
								loading="lazy"
							/>
							<p>
								Follows the ordering principle of “Last In First Out” (LIFO).
								It's like eating a stack of donuts; when you want a donut, you
								take the donut on top of the stack.
								<hr></hr>
								<i>
									<small>
										Ex: A history of your recently visited websites is a Stack.
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
						<div className="item-container-data-structures white-background">
							<h4>Queues</h4>
							<img
								id="queues"
								alt="queues"
								src="https://i.imgur.com/qSqFRY4.png"
								width="60%"
								loading="lazy"
							/>
							<p>
								Follows the ordering principle of “First In First Out” (FIFO).
								It's like waiting in line to buy donuts; if you're at the front
								of the line, you get to leave first.
								<hr></hr>
								<i>
									<small>
										Ex: Programming a printer Queue can make sure that jobs are
										printed in the order of their arrival. (
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
					</div>

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

					<div className="flex-container-data-structures">
						<div className="item-container-data-structures white-background">
							<h4>Trees</h4>
							<img
								id="trees"
								alt="trees"
								src="https://i.imgur.com/WG26NDo.png"
								width="60%"
								loading="lazy"
							/>
							<p>
								A tree-like structure in which nodes can store lists of child
								nodes.<hr></hr>
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
							</p>
						</div>
						<div className="item-container-data-structures white-background">
							<h4>Binary Trees</h4>
							<img
								id="binary-trees"
								alt="binary trees"
								src="https://i.imgur.com/FAgEGr2.png"
								width="60%"
								loading="lazy"
							/>
							<p>
								Trees that store values in left and right pointers. A Binary
								Search Tree is where every node fits a specific ordering.
								<hr></hr>
								<i>
									<small>
										Ex: A family tree in which every member has two children. (
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
					</div>
					<div className="flex-container-data-structures">
						<div className="item-container-data-structures white-background">
							<h4>Breadth First Search (BFS)</h4>
							<a
								href="https://pdfsharein.blogspot.com/2020/05/depth-first-search-vs-breadth-first.html"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									id="BFS"
									alt="BFS"
									src="https://i.imgur.com/7yerhuP.png"
									width="60%"
									loading="lazy"
								/>
							</a>
							<p>
								A queue-like search that traverses a tree from left to right,
								then top to bottom, like reading each level of all the nodes.
								<hr></hr>
								<i>
									<small>
										Ex: Good for finding the shortest path between two nodes. (
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
						</div>
						<div className="item-container-data-structures white-background">
							<h4>Depth First Search (DFS)</h4>
							<a
								href="https://totheinnovation.com/depth-first-search-dfs/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									id="DFS"
									alt="DFS"
									src="https://i.imgur.com/mkx2xrk.jpg"
									width="60%"
									loading="lazy"
								/>
							</a>
							<p>
								A stack-like search that traverses a tree from top to bottom,
								visiting all a node's child nodes before moving from left to
								right to its siblings.
								<hr></hr>
								<i>
									<small>
										Ex: Good for looking for paths and values far away from our
										source. (
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
						</div>
					</div>
					<div className="flex-container-data-structures">
						<div className="item-container-data-structures white-background">
							<h4>Tries</h4>
							<img
								id="trie"
								alt="trie"
								src="https://i.imgur.com/NXCozkT.png"
								width="60%"
								loading="lazy"
							/>
							<p>
								Trees that aren't limited to only left and right pointers, but
								they usually only store alphabetical data as collections of
								strings.<hr></hr>
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
							</p>
						</div>
						<div className="item-container-data-structures white-background">
							<h4>Graphs</h4>
							<img
								id="graphs"
								alt="graphs"
								src="https://i.imgur.com/k9X8jh5.png"
								width="60%"
								loading="lazy"
							/>
							<p>
								Any collection of nodes and edges, in which any node can have
								multiple edges to other nodes.
								<hr></hr>
								<i>
									<small>
										Ex: A group of people on Facebook make up a Graph; some
										people follow each other while others only follow one-way. (
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
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default DataStructures;
