import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Course = (props) => {
    const {courseName,catagory,institute,rating,totalStudent,type,imgUrl} = props.course;
    console.log(props)
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                <Card.Title>{courseName}</Card.Title>
                <Rating
  placeholderRating={rating}
  emptySymbol={<i class="far fa-star"></i>}
  placeholderSymbol={<i class="fas fa-star"></i>}
  fullSymbol={<i class="fas fa-star"></i>}
/>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;