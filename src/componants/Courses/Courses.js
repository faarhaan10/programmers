import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import { useCourses } from '../../hooks/useCourses';

const Courses = () => {
    const [courses] = useCourses();

    return (
        <div className="bg-secondary">
            <Container className="py-4">
                <Row xs={1} md={3} className="g-4">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course ={course}
                    ></Course>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;