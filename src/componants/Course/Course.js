import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const {courseName,catagory,institute,rating,totalStudent,type,imgUrl} = props.course;
    
    return (
        <Col>
            <Card className="h-100 shadow ">
                <Card.Img variant="top" src={imgUrl} className="p-2" />
                <Card.Body>
                <Card.Title>{courseName}</Card.Title>
                    <div className="my-0">
                        <p className="my-0">{institute}</p> 
                        <p className="my-0">Course Type: {catagory}</p>  
                        <p className="my-0">Course Type: {type}</p>
                        <p className="my-0">{rating}ratings <i className="fas fa-star text-warning" ></i></p>
                        <p className="my-0">Total Student: {totalStudent}</p>    
                    </div>  

                </Card.Body>
                <Card.Footer>
                    <Link to="/"> 
                    <Button>Enroll Now</Button>
                    </Link>

                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;