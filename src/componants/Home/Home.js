import React from 'react';
import { Button, Carousel,Col,Container, Image, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCourses } from '../../hooks/useCourses';

const Home = () => {
    const [courses] = useCourses();

    return (
        <div className="bg-info">
            {/* carusel  */}
            <Container className="py-2">
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

{/* see all button  */}
            <div className="text-center mb-4">
            <Link to="/courses">
                <Button>See All Courses</Button>
            </Link>
            </div>
                
            {/* review section  */}
            <div className=" overflow-hidden">
                <div className="row my-2 gx-5 gy-3 d-flex">
{/* review student single  */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="p-5 border rounded-3 text-center bg-white shadow">
                            <div className="px-4 ">
                                <img className="img-fluid" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4Tixoe62Y1u5VXqpM2mGPY/f4c89352619639057ca8648e64456aab/coursera-learner-a.png?" alt=""/>
                            </div>
                            <h3 className="text-primary fw-bold">Julio R
                            </h3>
                            <p className="fw-bold">Web Developer</p>
                            <p className="pt-3">"I started at stage zero. With Coursera I was able to start learning online and eventually build up enough knowledge and skills to transition into a well-paying career."</p>

                        </div>
                    </div>


{/* review student single  */}
                    <div className="col-lg-4 col-sm-6">
                        <div className="p-5 border rounded-3 text-center  bg-white shadow">
                            <div className="px-4 ">
                                <img className="img-fluid" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/yi0wou0N5EsZGDfVejLKR/efce71fb9c36c759a5c96d37a8cdc5e0/coursera-learner-b.png?" alt=""/>
                            </div>
                            <h3 className="text-primary fw-bold">Kara A.
                            </h3>
                            <p className="fw-bold">iMBA Graduate, University of Illinois</p>
                            <p className="pt-3">"It’s a really big deal to offer an online MBA that’s a real MBA at a price that’s achievable. This program is totally disrupting higher education."</p>

                        </div>
                    </div>
                    

{/* review student single  */}                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="p-5 border rounded-3 text-center bg-white shadow">
                            <div className="px-4 ">
                                <img className="img-fluid" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7caQWjB2R0E1urlsdNUpdW/3de2d5d9afcd53e8447cd566e632be07/coursera-learner-c.png?" alt=""/>
                            </div>
                            <h3 className="text-primary fw-bold">Mirela L.
                            </h3>
                            <p className="fw-bold">IBM Data Science Professional Certificate Alumna</p>
                            <p className="pt-3">"Recruiters saw my Professional Certificate on my LinkedIn profile. During the interview, they told me they were impressed with the skills I learned. I got the job!"</p>


                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mb-5">
                <h1 className="fw-bold fs-1">Students Review</h1>
            </div>
        
        </Container>
        </div>
    );
};

export default Home;