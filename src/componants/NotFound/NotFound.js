import React from 'react';
import { Col, Container, Image, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>
                <Row className="align-items-center mt-5">
                    
                    <Col xs={12} md={6}>
                        <Image className="img-fluid" src="https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"/>
                    </Col>

                    <Col xs={12}  md={6}>
                        <div className="p-2">
                            <h1>Oops....</h1>
                            <h2>We can't seem to find the page you are looking for!</h2>
                            <Link to="/">
                                <Button>HOME</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default NotFound;