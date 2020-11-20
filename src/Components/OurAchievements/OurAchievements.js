import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurAchievements.css'

const OurAchievements = () => {
    return (
        <Container className="container my-5">
        <Row>
            <Col xs={5}>
                <h1>Our Achievements</h1>
                    <p>It is a long established fact that a reader will be distracted by 
                    the readable content of a page when looking at its layout. The 
                    point of using Lorem Ipsum is that it has a more-or-less normal 
                    distribution of letter. </p>
            </Col>
            
            <Col xs={7}>
                <Row>
                    <Col xs={6} sm={6}>
                        <div className="d-flex achievement-card" id="ourAchievements-cards">
                            <div className="pr-3">
                                <img className="w-50" src="https://i.ibb.co/C1wrHdF/image.png" alt=""/>
                            </div>
                            <div>
                                <h3>700+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <div className="d-flex achievement-card" id="ourAchievements-cards">
                            <div className="pr-3">
                                <img className="w-75" src="https://i.ibb.co/7tbxQ7x/won.png" alt=""/>
                            </div>
                            <div>
                                <h3>25+</h3>
                                <p>Crazy Minds</p>
                            </div>
                        </div>
                        
                    </Col>

                    <Col xs={6} sm={6}>
                        <div className="d-flex achievement-card" id="ourAchievements-cards">
                            <div className="pr-3">
                                <img className="w-75"  src="https://i.ibb.co/mX06WSt/tropy.png" alt=""/>
                            </div>
                            <div>
                                <h3>140+</h3>
                                <p>Projects Completed</p>
                            </div>
                        </div>

                        <div className="d-flex achievement-card" id="ourAchievements-cards">
                            <div className="pr-3">
                                <img className="w-75" src="https://i.ibb.co/Sfzv1rF/rocket.png" alt=""/>
                            </div>
                            <div>
                                <h3>75+</h3>
                                <p>Running Projects</p>
                            </div>
                        </div>
                        
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container >
        
    );
};

export default OurAchievements;
// https://i.ibb.co/8cGtHKv/happy.png
// https://i.ibb.co/Sfzv1rF/rocket.png
// https://i.ibb.co/mX06WSt/tropy.png
// https://i.ibb.co/7tbxQ7x/won.png