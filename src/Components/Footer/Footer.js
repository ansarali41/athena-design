import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import logo from '../../image-icon/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container my-5 ">
            <div className="text-center">
                <div className="py-4">
                    <h2>Get your design right, right now</h2>
                    <p>Be the first know our latest offers and updates!</p>
                </div>
                <form class="form-search" method="get" action="#">
                    <input type="search" name="search" placeholder="Enter your email address"/>
                    <button>Get Started</button>
                </form>   
            </div>

            <Container className="my-5">
                <Row>
                    <Col xs={12} md={3} >
                        <img src={logo} className="w-50 p-2" alt=""/>
                        <div>
                            <img className="p-2 social-icons" src="https://i.ibb.co/wMV8tqP/facebook.png" alt=""/>
                            <img className="p-2 social-icons" src="https://i.ibb.co/s9393XQ/linkedin.png" alt=""/>
                            <img className="p-2 social-icons" src="https://i.ibb.co/D7CMc5b/twitter.png" alt=""/>
                            <img className="p-2 social-icons" src="https://i.ibb.co/tMsX4H7/dribbble.png" alt=""/>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="footer-style ">
                        <ul style={{listStyleType:'none'}}>
                            <li>Features</li>
                            <li>Enterprise</li>
                            <li>Pricing</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={3} className="footer-style ">
                        <ul style={{ listStyleType: 'none' }}>
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li>Status</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={3} className="footer-style ">
                        <ul style={{ listStyleType: 'none' }}>
                            <li>About Us</li>
                            <li>Terms of Service</li>
                            <li>Security</li>
                            <li>Login</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;

// https://i.ibb.co/wMV8tqP/facebook.png
// https://i.ibb.co/s9393XQ/linkedin.png
// https://i.ibb.co/D7CMc5b/twitter.png
// https://i.ibb.co/tMsX4H7/dribbble.png