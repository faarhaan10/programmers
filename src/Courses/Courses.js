import React from 'react';
import { Row } from 'react-bootstrap';
import { useCourses } from '../hooks/useCourses';

const Courses = () => {
    const [courses] = useCourses();

    return (
        <Row xs={1} md={3} className="g-4">
            {
                courses.map(course => <Courses
                    key={course.id}
                    course = {course}
                ></Courses>)
            }
        </Row>
    );
};

export default Courses;