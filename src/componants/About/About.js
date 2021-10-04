import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Container>
                <Row className="align-items-center mt-5">
                    
                    <Col xs={12} md={6}>
                        <Image className="img-fluid" src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"/>
                    </Col>

                    <Col xs={12}  md={6}>
                        <div className="p-2">
                            <h1>About US</h1>
                            <p>There are countless online education marketplaces on the internet. And there’s us. We are not the biggest. We are not the cheapest. But we are the fastest growing. We have the highest course completion rate in the industry.</p>
                            <Link to="/services">
                                <Button>Learn More</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;