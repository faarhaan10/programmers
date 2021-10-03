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
                    <p>{institute}<small><br /> {catagory}</small> <br /> {totalStudent} Students </p>
                    <p><strong>{type}</strong>   
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<i className="far fa-star" bg="warning" ></i>}
                        placeholderSymbol={<i className="fas fa-star" bg="warning" ></i>}
                        fullSymbol={<i className="fas fa-star" bg="warning" ></i>}
                    />
                    </p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;