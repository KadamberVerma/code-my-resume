import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown, Col } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
	const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

	return (
		<Navbar
			bg="light"
			expand="lg"
			className="mb-4 shadow p-3 mb-5 bg-body rounded"
			sticky="top"
		>
			<Container className="justify-content-between">
				<Col xs={12} md={6} className="my-3">
					<LinkContainer to="/">
						<Navbar.Brand>CodeMyResume</Navbar.Brand>
					</LinkContainer>
				</Col>
				<Col xs={12} md={6} className="my-3">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<LinkContainer to="/">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>

							{!isAuthenticated && (
								<Nav.Link onClick={() => loginWithRedirect()}>
									Login
								</Nav.Link>
							)}
							{isAuthenticated && (
								<Nav.Link onClick={() => logout()}>
									Logout
								</Nav.Link>
							)}

							{isAuthenticated && (
								<LinkContainer to="/profile">
									<Nav.Link>Profile</Nav.Link>
								</LinkContainer>
							)}

							<NavDropdown title="Resume" id="basic-nav-dropdown">
								<LinkContainer to="/create-my-resume">
									<NavDropdown.Item>
										Resume Builder
									</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Col>
			</Container>
		</Navbar>
	);
};

export default Header;
