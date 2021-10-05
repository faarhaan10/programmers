import React from 'react';
import { Col, Container, Image, Row ,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

// import { useState, useEffect} from "react";

const CourseDetail = () => {

    const {courseId} = useParams();

/* 
//custom not working
//    const [courses] = useCourses();
// using react hook due to load data again    
    const [courses,setCourses] = useState([]);
    useEffect( () => {
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);
    const courseDetail = courses.find(course => course.id ===courseId);
    console.log(courses)
 */

    return (
        <Container className="my-5 py-5">
            <Row className=" py-5">
                <Col xs={12} md={6}>
                    <h1>Course id: {courseId}</h1>
                    <h2>Course detail is not available right now!</h2>
                    <h3>But! Don't Worry, It Will Be Right Back</h3>
                    <Link to="/courses">
                        <Button>Back</Button>
                    </Link>
                </Col>
                <Col xs={12} md={6} className='text-center'>
                    <Image src="http://static.skaip.org/img/emoticons/180x180/f6fcff/loudlycrying.gif" />
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetail;