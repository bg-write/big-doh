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
				<h2>String</h2>
				<img id="" alt="" src="" width="150px" />
				<p>
					‘Hello’ (
					<a href="" target="_blank" rel="noopener noreferrer">
						YouTube
					</a>
					)
				</p>
				<hr />
				<h2>Array</h2>
				<img
					id="array"
					alt="array"
					src="https://i.imgur.com/e4cqW9f.png"
					width="150px"
				/>
				<p>
					A collection of items that can be accessed individually via an index
					that lists the position of each item. [‘A’, ‘B’, ‘C’] (
					<a href="" target="_blank" rel="noopener noreferrer">
						YouTube
					</a>
					)
				</p>
				<hr />
				<h2>Sets</h2>
				<img
					id="sets"
					alt="sets"
					src="https://i.imgur.com/fV02AeY.png"
					width="150px"
				/>
				<p>
					Similar to an array, but it can only contain unique values. (
					<a href="" target="_blank" rel="noopener noreferrer">
						YouTube
					</a>
					)
				</p>
				<hr />
				<h2>Linked Lists</h2>
				<img
					id="linked-lists"
					alt="linked lists"
					src="https://i.imgur.com/cUSLM2p.png"
					width="150px"
				/>
				<p>
					Lists that store data inside of nodes that point to each other. EX A playlist of songs is a doubly linked list since each song points to both the previous and next songs. (
					<a href="" target="_blank" rel="noopener noreferrer">
						YouTube
					</a>
					)
				</p>
				<hr />
				<h2>Stacks & Queues</h2>
				<img
					id="stacks"
					alt="stacks"
					src="https://i.imgur.com/UQCW78i.png"
					width="150px"
				/>
				<p>
					Stacks: Last In First Out (LIFO). Like a stack of ... donuts. When you
					want a donut, you'll take the one on top. (
					<a href="" target="_blank" rel="noopener noreferrer">
						YouTube
					</a>
					)
				</p>
				<img
					id="queues"
					alt="queues"
					src="https://i.imgur.com/qSqFRY4.png"
					width="150px"
				/>
				<p>
					Queues: First In First Out (FIFO). Like waiting in line at Lard Lad
					Donuts. The next person to leave is the person at the front of the
					line. (
					<a href="" target="_blank" rel="noopener noreferrer">
						YouTube
					</a>
					)
				</p>
				<hr />
				<h2>Hash Tables</h2>
				<img
					id="hash-tables"
					alt="hash tables"
					src="https://i.imgur.com/IhZSTSQ.png"
					width="150px"
				/>
				<p>
					A list-like structure that uses a hash function to generate keys for
					each value. Like scrambling a bunch of donuts to make something new. (
					<a href="" target="_blank" rel="noopener noreferrer">
						YouTube
					</a>
					)
				</p>
				<hr />
				<h2>Trees & Graphs</h2>
				<img
					id="trees"
					alt="trees"
					src="https://i.imgur.com/WG26NDo.png"
					width="150px"
				/>
				<p>
					Trees: A tree-like structure in which nodes can store lists of child
					nodes. (
					<a href="" target="_blank" rel="noopener noreferrer">
						YouTube
					</a>
					)
				</p>
				<img
					id="binary-trees"
					alt="binary trees"
					src="https://i.imgur.com/FAgEGr2.png"
					width="150px"
				/>
				<p>
					Binary Trees: Trees that store values in left and right pointers. (
					<a href="" target="_blank" rel="noopener noreferrer">
						YouTube
					</a>
					)
				</p>
				<img id="" alt="" src="" width="150px" />
				<p>
					Binary Search Trees: Every node fits a specific ordering.(
					<a href="" target="_blank" rel="noopener noreferrer">
						YouTube
					</a>
					)
				</p>
				<img id="" alt="" src="" width="150px" />
				<p>
					Trie: Can only store alphabetical data. (
					<a href="" target="_blank" rel="noopener noreferrer">
						YouTube
					</a>
					)
				</p>
				<img
					id="graphs"
					alt="graphs"
					src="https://i.imgur.com/k9X8jh5.png"
					width="150px"
				/>
				<p>
					Graphs: Any collection of nodes and edges in which nodes store data
					and edges connect data. Any node can have multiple edges to other
					nodes. (
					<a href="" target="_blank" rel="noopener noreferrer">
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
