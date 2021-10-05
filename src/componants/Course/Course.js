import React from 'react';
import { useHistory } from 'react-router';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const {id,courseName,catagory,institute,rating,totalStudent,type,imgUrl} = props.course;
    
    const history  = useHistory();
    const handleCourse = courseId => {
        history.push(`/course/${courseId}`);
    }
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
                    <Button onClick={()=>{handleCourse({id})}>Enroll Now</Button>

                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;