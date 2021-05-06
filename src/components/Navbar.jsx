import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'

function NavBar() {
	return (
		<>
			{/* ORIGINAL HEADER PRE-WIREFRAME CHANGE
			{/* <header>
				<ul class="nav justify-content-center nav-fill">
					<li class="nav-item">
						<Link to="/">BIG D'OH</Link>
					</li>
					<li class="nav-item">
						<Link to="/big-o">LEARN</Link>
					</li> 
					<li class="nav-item">
						<Link to="/ttt">STUDY BREAK</Link>
					</li>
				</ul>
			</header> */}
			<header>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</header>
		</>
	);
}

export default NavBar;
