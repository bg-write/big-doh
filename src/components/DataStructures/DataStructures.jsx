import React from 'react';
import { Link } from 'react-router-dom';

function DataStructures() {
	return (
		<>
			<main>
				<h1>DATA STRUCTURES</h1>
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
						<b>Data Structure</b> - A container that stores data in a specific
						and organized layout.
					</i>{' '}
					(
					<a
						href="https://www.youtube.com/watch?v=bum_19loj9A"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>
				<hr />
				<h2>Arrays & Strings</h2>
				<p>
					<i>
						Data structures mostly concerened with the ordering and accessing of
						data.
					</i>
				</p>
				<h3>Arrays</h3>
				<img
					id="array"
					alt="array"
					src="https://i.imgur.com/e4cqW9f.png"
					width="60%"
				/>
				<p>
					A collection of items that can be accessed individually via an index.
					[‘A’, ‘B’, ‘C’] (
					<a
						href="https://www.youtube.com/watch?v=B2KusJcbVIg"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>
				<h3>Sets</h3>
				<img
					id="sets"
					alt="sets"
					src="https://i.imgur.com/fV02AeY.png"
					width="60%"
				/>
				<p>
					Similar to arrays but can only contain unique values. (
					<a
						href="https://www.youtube.com/watch?v=SvvvGT3qD1Y"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>
				<h3>Linked List</h3>
				<img
					id="linked-lists"
					alt="linked lists"
					src="https://i.imgur.com/cUSLM2p.png"
					width="60%"
				/>
				<p>
					Lists that store data inside of nodes that point to each other, and
					where the order is more strict. EX A playlist of songs is a Doubly
					Linked List since each song points to both the previous and next
					songs. (
					<a
						href="https://www.youtube.com/watch?v=njTh_OwMljA"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>
				<h3>Hash Tables</h3>
				<img
					id="hash-tables"
					alt="hash tables"
					src="https://i.imgur.com/IhZSTSQ.png"
					width="60%"
				/>
				<p>
					A list-like structure that uses a hash function to generate keys for
					each value. Like scrambling a bunch of donuts to make new donuts, and
					each new donut has a specific key. (
					<a
						href="https://www.youtube.com/watch?v=MfhjkfocRR0"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>

				<hr />
				<h2>Stacks & Queues</h2>
				<p>
					<i>
						Both are defined by how items are added to, and removed from, data
						structures.
					</i>
				</p>
				<h3>Stacks</h3>
				<img
					id="stacks"
					alt="stacks"
					src="https://i.imgur.com/UQCW78i.png"
					width="60%"
				/>
				<p>
					Last In First Out (LIFO). Like a stack of ... donuts. When you want a
					donut, you take the donut on top. (
					<a
						href="https://www.youtube.com/watch?v=wjI1WNcIntg"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>
				<h3>Queues</h3>
				<img
					id="queues"
					alt="queues"
					src="https://i.imgur.com/qSqFRY4.png"
					width="60%"
				/>
				<p>
					First In First Out (FIFO). Like waiting in line at Lard Lad Donuts.
					The next person to leave is the person at the front of the line, since
					that was the first person of the line to enter at that moment. (
					<a
						href="https://www.youtube.com/watch?v=wjI1WNcIntg"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>

				<hr />
				<h2>Trees & Graphs</h2>
				<p>
					<i>
						Both data structures use nodes to store data, but tree edges are
						more rigid than graphs.
					</i>
				</p>
				<h3>Trees</h3>
				<img
					id="trees"
					alt="trees"
					src="https://i.imgur.com/WG26NDo.png"
					width="60%"
				/>
				<p>
					A tree-like structure in which nodes can store lists of child nodes. (
					<a
						href="https://www.youtube.com/watch?v=oSWTXtMglKE"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>
				<h3>Binary Trees</h3>
				<img
					id="binary-trees"
					alt="binary trees"
					src="https://i.imgur.com/FAgEGr2.png"
					width="60%"
				/>
				<p>
					Trees that store values in left and right pointers. A Binary Search
					Tree is where every node fits a specific ordering. (
					<a
						href="https://www.youtube.com/watch?v=oSWTXtMglKE"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>
				<h3>Tries</h3>
				<img
					id="trie"
					alt="trie"
					src="https://i.imgur.com/NXCozkT.png"
					width="60%"
				/>
				<p>
					Trees that aren't limited to only left and right pointers, but they
					usually only store alphabetical data. (
					<a
						href="https://www.youtube.com/watch?v=zIjfhVPRZCg"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					)
				</p>
				<h3>Graphs</h3>
				<img
					id="graphs"
					alt="graphs"
					src="https://i.imgur.com/k9X8jh5.png"
					width="60%"
				/>
				<p>
					Any collection of nodes and edges in which nodes store data and edges
					connect data. Any node can have multiple edges to other nodes. EX A
					group of people on Facebook, some of whom follow each other while
					others only follow one-way. (
					<a
						href="https://www.youtube.com/watch?v=DBRW8nwZV-g"
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

export default DataStructures;
