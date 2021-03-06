import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
// navigation 
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container className="fw-bold">

                <Navbar.Brand as={Link} to="/" className="fw-bolder fs-2 ">PROGRAMMER</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 fw-bold"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/courses" >Courses</Nav.Link>
                            <Nav.Link as={Link} to="/services"   >Services</Nav.Link>
                            <Nav.Link as={Link} to="/about" >About</Nav.Link>
                            <Nav.Link as={Link} to="/contact" >Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;