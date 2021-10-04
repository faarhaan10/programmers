import React from 'react';
import { Carousel,Col,Container, Image, Row} from 'react-bootstrap';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import { useCourses } from '../hooks/useCourses';

const Home = () => {
    const [courses] = useCourses();

    return (
        <div className="bg-info">
            <Container>
                <Carousel>
                {
                    courses.map(course => <Carousel.Item    
                        interval={3000}
                        key={course.id}>
                        <Container>
                        <Row className="align-items-center justify-content-center my-2">
                            <Col xs={6}>
                                <Image
                                    className="d-block w-100 p-4"
                                    src={course.imgUrl}
                                    alt={course.courseName}
                                    rounded
                                />
                            </Col>
                            <Col xs={6} md={6}>
                                   <div className="mx-auto my-5">
                                   <h2>{course.courseName}</h2>
                                    <h3>{course.institute}</h3>
                                   </div>
                            </Col>
                        </Row>
                        </Container>
                    </Carousel.Item>)
                }
            </Carousel>
            </Container>
        </div>
    );
};

export default Home;