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
					<i>A container that stores data in a specific, organized layout.</i>
				</p>
				<h2>String</h2>
				<p>‘Hello’</p>
				<hr />
				<h2>Array</h2>
				<p>[‘A’, ‘B’, ‘C’]</p>
				<hr />
				<h2>Sets</h2>
				<p>
					Similar to an array, but can only contain unique values. ["Frodo",
					"Aragorn", "Saruman"]
				</p>
				<hr />
				<h2>Linked Lists</h2>
				<p>Lists that store data inside of nodes that point to each other.</p>
				<hr />
				<h2>Stacks & Queues</h2>
				<p>Stacks: Last In First Out (LIFO). Like a stack of donuts.</p>
				<p>
					Queues: First In First Out (FIFO). Like waiting in line at Lard Lad
					Donuts.
				</p>
				<hr />
				<h2>Hash Tables</h2>
				<p>
					List-like structure that uses a hash function to generate keys for
					values. Like scrambling a bunch of donuts to make something new.
				</p>
				<hr />
				<h2>Trees & Graphs</h2>
				<p>Trees: Nodes can store lists of child nodes.</p>
				<p>Binary Trees: Stores values in left and right pointers.</p>
				<p>Binary Search Trees: Every node fits a specific ordering.</p>
				<p>Trie: Can only store alphabetical data.</p>
				<p>Graphs: Any node can have multiple edges to other nodes.</p>
				<hr />
			</main>
		</>
	);
}

export default DataStructures;