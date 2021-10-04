import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const Services = () => {
    return (
<>
        <Container className="mt-4"> 
            <h1>Our Services</h1>
            <Row>
                <Col xs={12} md={3} className="me-2 mt-2" >
                    <Card border="info" className="p-2 h-100">
                        <Card.Body>
                            <h4 className="text-primary my-0">Product Certification&nbsp;&gt;</h4>
                            <p className="my-0">eg. CE Marking, Kitemark
                            </p>
                        </Card.Body>
                    <Link to='/courses'>
                        <Button variant={"success"} className="py-1 mt-1 ms-3">See Details</Button>
                    </Link>
                    </Card>
                </Col>
                <Col xs={12} md={3} className="me-2 mt-2">
                    <Card border="info" className="p-2 h-100">
                        <Card.Body>
                            <h4 className="text-primary my-">Product Certification&nbsp;&gt;</h4>
                            <p className="my-0">eg. CE Marking, Kitemark
                            </p> 
                        </Card.Body>
                    <Link to='/courses'>
                        <Button variant={"success"} className="py-1 mt-1 ms-3">See Details</Button>
                    </Link>
                    </Card>
                </Col>
                <Col xs={12} md={3} className="me-2 mt-2">
                    <Card border="info" className="p-2 h-100">
                        <Card.Body>
                            <h4 className="text-primary my-0">Certification&nbsp;&gt;</h4>
                            <p className="my-0">
                                eg. ISO 9001
                            </p>
                        </Card.Body>
                        <Link to='/courses'>
                            <Button variant={"success"} className="py-1 mt-1  ms-3">See Details</Button>
                        </Link>
                    </Card>
                </Col>
                
            </Row>
        </Container>
        <div className="text-center">
        <Image className="img-fluid"  src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" rounded />
        </div>
        </>
    )

};

export default Services;