import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurAchievements.css'

const OurAchievements = () => {
    const data = [
        // {
        //     titel: "700+",
        //     description: "Happy ",
        //     img: "https://i.ibb.co/C1wrHdF/image.png"
        // },
        {
            titel: "120+",
            description: "crazy mind",
            img: "https://i.ibb.co/7tbxQ7x/won.png"
        }, {
            titel: "140+",
            description: "Project Complete",
            img: "https://i.ibb.co/mX06WSt/tropy.png"
        },//https://i.ibb.co/Sfzv1rF/rocket.png
        {
            titel: "75+",
            description: "Runni project",
            img: "https://i.ibb.co/Sfzv1rF/rocket.png"
        }
    ]
    return (
        <Container className="container my-5" >
            <Row>
                <Col xl={5} >
                    <h1>Our Achievements</h1>
                    <p>It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letter. </p>
                </Col>

                <Col xl={7}  >
                    <Row>
                    <Col  md={6} sm={12} style={{marginTop:"15px"}}>
                                    <div className="d-flex achievement-card" id="ourAchievements-cards">
                                        <div style={{width:"50%"}} >
                                            <img className="img-class" src="https://i.ibb.co/C1wrHdF/image.png" width="50%" alt="" />
                                        </div>
                                        <div style={{width:"50%"}}>
                                            <h3>800+</h3>
                                            <p>Happy client</p>
                                        </div>
                                    </div>

                                </Col>
                        {
                            data.map(dt =>
                                <Col  md={6} sm={12} style={{textAlign:"center",marginTop:"15px"   }}>
                                    <div className="d-flex achievement-card" id="ourAchievements-cards">
                                        <div style={{width:"50%"}}>
                                            <img className="img-class" style={{ width: "50%"  }} src={dt.img} alt="" />
                                        </div>
                                        <div style={{width:"50%"}}>
                                            <h3>{dt.titel}</h3>
                                            <p>{dt.description}</p>
                                        </div>
                                    </div>

                                </Col>
                            )
                        }

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