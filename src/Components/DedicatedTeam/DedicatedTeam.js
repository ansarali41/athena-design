import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './DedicatedTeam.css'

const DedicatedTeam = () => {
    return (
        <Container className="container text-center my-5">
            <h1 className="py-4">CHOOSE YOUR DEDICATED TEAM</h1>
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={3} sm={12} className="shadow p-3 m-4 bg-white rounded" id="dedicatedTeam-cards">
                    <h1>$199</h1>
                    <p>For Basic</p>
                    <hr/>
                    <p>Homepage <br/>
                    No Inner Page <br />
                    Asset file <br />
                    Source file <br />
                    Free Stock Photos  <br />
                    10 Days Free Support <br />  
                    24/7 Support
                    </p> 
                    <Button className='mt-3' id="btnstyle">Order Now</Button>
                </Col>

                <Col xs={12} md={3} sm={12} className="shadow p-3 m-4 bg-white rounded" id="dedicatedTeam-cards">
                    <h1>$399</h1>
                    <p>For Preferred</p>
                    <hr />
                    <p>Homepage <br />
                    4 Inner Pages <br />
                    Asset file <br />
                    Source file <br />
                    Free Stock Photos  <br />
                    20 Days Free Support<br />
                    24/7 Support <br />
                    </p> 
                    <Button className='mt-3' id="btnstyle">Order Now</Button>
                
                </Col>

                <Col xs={12} md={3} sm={12} className="shadow p-3 m-4 bg-white rounded" id="dedicatedTeam-cards">
                    <h1>$399</h1>
                    <p>For Preferred</p>
                    <hr />
                    <p>Homepage <br />
                    8 Inner Pages <br />
                    Asset file <br />
                    Source file <br />
                    Free Stock Photos  <br />
                    30 Days Free Support <br />
                    24/7 Support <br />
                    </p> 
                    <Button className='mt-3' id="btnstyle">Order Now</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default DedicatedTeam;