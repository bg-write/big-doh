import React from 'react';
import { Link } from 'react-router-dom';

function DataStructures() {
	return (
		<>
			<content>
				<h1>DATA STRUCTURES</h1>
				<div>
					<Link to="/">Back To Home</Link>
				</div>
				<hr />
				<p>
					<i>A container that stores data in a specific, organized layout.</i>
				</p>
				<p>Strings & Arrays</p>
				<p>String (‘Hello’)</p>
				<p>Array [‘A’, ‘B’, ‘C’]</p>
				<p>Sets</p>
				<p>
					Similar to an array, but can only contain unique values. ["Frodo",
					"Aragorn", "Saruman"]
				</p>
				<p>Linked Lists</p>
				<p>Lists that store data inside of nodes that point to each other.</p>
				<p>Stacks & Queues</p>
				<p>Stacks: Last In First Out (LIFO). Like a stack of donuts.</p>
				<p>
					Queues: First In First Out (FIFO). Like waiting in line at Lard Lad
					Donuts.
				</p>
				<p>Hash Tables</p>
				<p>
					List-like structure that uses a hash function to generate keys for
					values. Like scrambling a bunch of donuts to make something new.
				</p>
				<p>Trees & Graphs</p>
				<p>Trees: Nodes can store lists of child nodes.</p>
				<p>Binary Trees: Stores values in left and right pointers.</p>
				<p>Binary Search Trees: Every node fits a specific ordering.</p>
				<p>Trie: Can only store alphabetical data.</p>
				<p>Graphs: Any node can have multiple edges to other nodes.</p>
				<hr />
			</content>
		</>
	);
}

export default DataStructures;
