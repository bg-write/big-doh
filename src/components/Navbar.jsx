import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
	return (
		<>
			<header>
				<Navbar expand="lg">
					<Navbar.Brand href="/">BIG D'OH</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link className="nav-item" href="/big-o">
								BIG O
							</Nav.Link>
							<Nav.Link className="nav-item" href="/algorithms">
								ALGORITHMS
							</Nav.Link>
							<Nav.Link className="nav-item" href="/data-structures">
								DATA STRUCTURES
							</Nav.Link>
							<Nav.Link className="nav-item" href="/ttt">
								STUDY BREAK
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		</>
	);
}

export default NavBar;
