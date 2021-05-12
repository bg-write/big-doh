import React from 'react';

function DataStructures() {
	return (
		<>
			<main id="data-structures-main">
				<div id="data-structures-title">
					<h1 id="data-structures-headline">DATA STRUCTURES</h1>
					<img
						id="data-structures-donut"
						class="loader"
						alt="donut"
						src="https://i.imgur.com/ske1xNn.png"
					/>
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

					<div className="item-container white-background">
						<h4>Arrays</h4>
						<img
							id="array"
							alt="array"
							src="https://i.imgur.com/e4cqW9f.png"
							width="60%"
						/>
						<p>
							A collection of items where items can be accessed individually via
							an index.<br></br>
							<i>
								<small>
									Ex: [‘A’, ‘B’, ‘C’]. (
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
						<hr></hr>

						<h3>Sets</h3>
						<img
							id="sets"
							alt="sets"
							src="https://i.imgur.com/fV02AeY.png"
							width="60%"
						/>
						<p>
							Similar to arrays, but this collection of items can only contain
							unique values.<br></br>
							<i>
								<small>
									Ex: XXX. (
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
						<hr></hr>
						<h3>Linked Lists</h3>
						<img
							id="linked-lists"
							alt="linked lists"
							src="https://i.imgur.com/cUSLM2p.png"
							width="60%"
						/>
						<p>
							Lists that store data inside of nodes (basic units for storing
							data) that point to each other, but the order is strict.<br></br>
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
						<hr></hr>
						<h3>Hash Tables</h3>
						<img
							id="hash-tables"
							alt="hash tables"
							src="https://i.imgur.com/IhZSTSQ.png"
							width="60%"
						/>
						<p>
							A list-like structure that uses a hash function to generate keys
							for each value.<br></br>
							<i>
								<small>
									Ex: Scrambling a bunch of donuts to make new donuts, each one
									having a specific key. (
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

					<div className="item-container white-background">
						<h4>Stacks</h4>
						<img
							id="stacks"
							alt="stacks"
							src="https://i.imgur.com/UQCW78i.png"
							width="60%"
						/>
						<p>
							Follows the ordering principle of “Last In First Out” (LIFO).
							<br></br>
							<i>
								<small>
									Ex: Eating a stack of donuts; when you want a donut, you take
									the donut on top of the stack. (
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
						<hr></hr>

						<h4>Queues</h4>
						<img
							id="queues"
							alt="queues"
							src="https://i.imgur.com/qSqFRY4.png"
							width="60%"
						/>
						<p>
							Follows the ordering principle of “First In First Out” (FIFO).
							<br></br>
							<i>
								<small>
									Ex: Waiting in line at Lard Lad Donuts; if you're at the front
									of the line, you get to leave first. (
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

					<div className="item-container white-background">
						<h4>Trees</h4>
						<img
							id="trees"
							alt="trees"
							src="https://i.imgur.com/WG26NDo.png"
							width="60%"
						/>
						<p>
							A tree-like structure in which nodes can store lists of child
							nodes.<br></br>
							<i>
								<small>
									Ex: XXX. (
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
						<hr></hr>

						<h4>Binary Trees</h4>
						<img
							id="binary-trees"
							alt="binary trees"
							src="https://i.imgur.com/FAgEGr2.png"
							width="60%"
						/>
						<p>
							Trees that store values in left and right pointers. A Binary
							Search Tree is where every node fits a specific ordering.<br></br>
							<i>
								<small>
									Ex: XXX. (
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
						<hr></hr>

						<h4>Tries</h4>
						<img
							id="trie"
							alt="trie"
							src="https://i.imgur.com/NXCozkT.png"
							width="60%"
						/>
						<p>
							Trees that aren't limited to only left and right pointers, but
							usually only store alphabetical data.<br></br>
							<i>
								<small>
									Ex: XXX. (
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
						<hr></hr>

						<h4>Graphs</h4>
						<img
							id="graphs"
							alt="graphs"
							src="https://i.imgur.com/k9X8jh5.png"
							width="60%"
						/>
						<p>
							Any collection of nodes and edges, in which any node can have
							multiple edges to other nodes.<br></br>
							<i>
								<small>
									Ex: A group of people on Facebook; some people follow each
									other while others only follow one-way. (
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
			</main>
		</>
	);
}

export default DataStructures;
