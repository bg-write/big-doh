import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
	return (
		<>
			<header>
				<Navbar expand="lg" className="center-text">
					<Navbar.Brand href="/">BIG D'OH</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link className="border-text" href="/big-o">BIG O</Nav.Link>
							<Nav.Link className="border-text" href="/algorithms">ALGORITHMS</Nav.Link>
							<Nav.Link className="border-text" href="/data-structures">DATA STRUCTURES</Nav.Link>
							<Nav.Link className="border-text" href="/ttt">STUDY BREAK</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		</>
	);
}

export default NavBar;
