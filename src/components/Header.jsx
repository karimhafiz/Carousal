import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<Navbar bg="light" expand="lg" data-bs-theme="light">
			<Navbar.Brand as={NavLink} to="/">
				Your Logo
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={NavLink} to="/" exact>
						Home
					</Nav.Link>
					<Nav.Link as={NavLink} to="/about">
						About
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
