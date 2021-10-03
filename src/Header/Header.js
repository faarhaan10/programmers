import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" >PUTUL</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/services" >Services</Nav.Link>
                        <Nav.Link as={Link} to="/courses" >Courses</Nav.Link>
                        <Nav.Link as={Link} to="/about" >About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default Header;