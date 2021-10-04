import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
    <footer className="bg-dark p-2">

        <div className="container pt-2">
            <div className="row justify-content-start">
                <div className="col-lg-4 col-sm-12">
                    <div className="">
                        <NavLink to="/footer" className="text-decoration-none fw-bold text-white">
                            <h1>PROGRAMMER</h1>
                        </NavLink>
                        <p className="text-secondary">As an individual university or college student, you have access to unlimited Guided Projects and one course for free per year. Also, you can still visit <span className="text-info">programmer.web
                            </span> and sign up to audit courses for free.</p>
                    </div>
                </div>
{/* about links */}
                <div className="col-lg-3 ml-lg-auto col-sm-12">
                    <div className=" text-white">
                        <h3>Account</h3>
                        <Nav.Link as={Link} to="/home"  className="py-0 text-secondary">Terms And Conditions</Nav.Link>
                        <Nav.Link as={Link} to="/home"  className="py-0 text-secondary">Privacy Policy</Nav.Link>
                        <Nav.Link as={Link} to="/home"  className="py-0 text-secondary">Help and support</Nav.Link>
                        <Nav.Link as={Link} to="/home"  className="py-0 text-secondary">Frequently Asked Question</Nav.Link>
                    </div>
                </div>


                <div className="col-lg-2 col-sm-6">
                    <div className=" text-white">
                        <h3>About</h3>
                        <Nav.Link as={Link} to="/home"  className="py-0 text-secondary">Services</Nav.Link>
                        <Nav.Link as={Link} to="/about"  className="py-0 text-secondary">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/home"  className="py-0 text-secondary">Pricing</Nav.Link>
                        <Nav.Link as={Link} to="/home"  className="py-0 text-secondary">Contact Us</Nav.Link>
                
                    </div>
                </div>

                <div className="col-lg-2 col-sm-6">
                    <div className=" text-white">
                        <h3>Socials</h3>
                        <Nav.Link as={Link} to="/home"  className="py-0 text-secondary"><i className="fab fa-facebook-f"></i> Facebook</Nav.Link>
                        <Nav.Link as={Link} to="/home"  className="py-0 text-secondary"><i className="fab fa-twitter"></i> Twitter</Nav.Link>
                        <Nav.Link as={Link} to="/home"  className="py-0 text-secondary"><i className="fab fa-pinterest-p"></i> Pinterest</Nav.Link>
                        <Nav.Link as={Link} to="/home"  className="py-0 text-secondary"><i className="fab fa-linkedin"></i> linkedin</Nav.Link>
                        <Nav.Link as={Link} to="/home"  className="py-0 text-secondary"><i className="fab fa-youtube"></i> YouTube</Nav.Link>

                    
                    </div>
                </div>
            </div>

            <div className="pt-5">
                    
                    <p className=" text-white text-center">
                        © Copyright <span className="text-info">PROGRAMMER
                            </span> A Programming Hero Initiative.
                    </p>
            </div>
        
        </div> 
    </footer>
    );
};

export default Footer;