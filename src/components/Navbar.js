import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
	return (
		<>
			<header>
				<Navbar expand="true" className="custom-toggler" id="nav-container">
					<Navbar.Brand href="/" id="nav-title">
						BIG D'OH
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="basic-navbar-nav" id='nav-toggle' />

					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link id="nav-item" href="/big-o">
								BIG O
							</Nav.Link>
							<Nav.Link id="nav-item" href="/algorithms">
								ALGORITHMS
							</Nav.Link>
							<Nav.Link id="nav-item" href="/data-structures">
								DATA STRUCTURES
							</Nav.Link>
							<Nav.Link id="nav-item" href="/ttt">
								<div id="border-text-study">STUDY BREAK</div>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		</>
	);
}

export default NavBar;
