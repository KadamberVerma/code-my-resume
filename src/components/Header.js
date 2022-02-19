import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" className="mb-4" >
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Sign in</Nav.Link>
                        <NavDropdown title="Resume" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Resume Builder</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Resume Samples</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">How to Write a Resume</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;