import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" >PROGRAMMER</Navbar.Brand>
                    
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